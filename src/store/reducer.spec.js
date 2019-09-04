import { renderHook, act } from '@testing-library/react-hooks';
import useSynergies, { firstState } from '.';

const demonBonusesMock = {
  demon: {
    key: 'demon',
    name: 'Demon',
    bonuses: [
      {
        needed: 2,
        effect: 'Return 15 mana back to attacker'
      },
      {
        needed: 4,
        effect: 'Return 30 mana back to attacker'
      },
      {
        needed: 6,
        effect: 'Return 45 mana back to attacker'
      }
    ]
  }
};

const blademasterBonusesMock = {
  blademaster: {
    key: 'blademaster',
    name: 'Blademaster',
    description: 'Blademasters have a 35% chance to strike additional times each attack.',
    accentChampionImage:
      'https://cdn.blitz.gg/blitz/centered/Fiora_Splash_Centered_0.jpg',
    bonuses: [
      {
        needed: 3,
        effect: '1 additional strike'
      },
      {
        needed: 6,
        effect: '2 additional strikes'
      },
      {
        needed: 9,
        effect: '4 additional strikes'
      }
    ]
  }
};

const aatroxMock = {
  id: '266',
  name: 'Aatrox',
  synergies: ['demon', 'blademaster']
};

// mock the global fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({ ...demonBonusesMock, ...blademasterBonusesMock })
});

describe('Synergies Reducer', () => {
  it('returns the firstState and fetch bonuses', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());

    expect(result.current.state).toEqual(firstState);
    await waitForNextUpdate();
    expect(result.current.state).toEqual({
      ...firstState,
      bonuses: { ...demonBonusesMock, ...blademasterBonusesMock }
    });
  });

  it('adds a brand new champion', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();

    const { addChampion } = result.current;

    act(() => {
      addChampion(aatroxMock);
    });

    expect(result.current.state.synergies).toEqual([
      {
        name: 'demon',
        count: 1,
        ranking: 'partial'
      },
      {
        name: 'blademaster',
        count: 1,
        ranking: 'partial'
      }
    ]);

    expect(result.current.state.board).toMatchObject([aatroxMock]);
  });

  it('adds an existing champion without adding synergies', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion } = result.current;

    act(() => {
      addChampion(aatroxMock);
      addChampion(aatroxMock);
    });

    expect(result.current.state.synergies).toEqual([
      {
        name: 'demon',
        count: 1,
        ranking: 'partial'
      },
      {
        name: 'blademaster',
        count: 1,
        ranking: 'partial'
      }
    ]);

    expect(result.current.state.board).toMatchObject([aatroxMock, aatroxMock]);
  });
});
