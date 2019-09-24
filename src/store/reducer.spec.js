import { renderHook, act } from '@testing-library/react-hooks';
import useSynergies, { firstState } from '.';
import { generateBonusesMock, generateChampionsMock } from './mock';

const bonusesMock = generateBonusesMock();
const championsMock = generateChampionsMock();

function getChampion(name) {
  return championsMock.find(champion => champion.name === name);
}

// mock the global fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({ ...bonusesMock })
});

describe('Synergies Reducer', () => {
  it('returns the firstState and fetch bonuses', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());

    expect(result.current.state).toEqual(firstState);
    await waitForNextUpdate();
    expect(result.current.state).toEqual({
      ...firstState,
      bonuses: { ...bonusesMock }
    });
  });

  it('adds a brand new champion', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const aatroxMock = getChampion('Aatrox');

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

    expect(result.current.state.board).toMatchObject([
      {
        id: aatroxMock.id,
        key: aatroxMock.key,
        name: aatroxMock.name,
        cost: aatroxMock.cost,
        synergies: aatroxMock.synergies
      }
    ]);
  });

  it('adds an existing champion without adding synergies', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const aatroxMock = getChampion('Aatrox');
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

    const boardAatroxMock = {
      id: aatroxMock.id,
      key: aatroxMock.key,
      name: aatroxMock.name,
      cost: aatroxMock.cost,
      synergies: aatroxMock.synergies
    };

    expect(result.current.state.board).toMatchObject([boardAatroxMock, boardAatroxMock]);
  });

  it('increases the level until 9', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSynergies({ ...firstState, level: 7 })
    );
    await waitForNextUpdate();
    const { levelUp } = result.current;

    act(() => {
      levelUp();
    });

    expect(result.current.state.level).toEqual(8);

    act(() => {
      levelUp();
      levelUp();
    });

    expect(result.current.state.level).toEqual(9);
  });

  it('decreases the level until 1', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSynergies({ ...firstState, level: 3 })
    );
    await waitForNextUpdate();
    const { levelDown } = result.current;

    act(() => {
      levelDown();
    });

    expect(result.current.state.level).toEqual(2);

    act(() => {
      levelDown();
      levelDown();
    });

    expect(result.current.state.level).toEqual(1);
  });

  it('removes the last champion when decreases max level', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSynergies({ ...firstState, level: 3 })
    );
    await waitForNextUpdate();
    const aatroxMock = getChampion('Aatrox');
    const camilleMock = getChampion('Camille');
    const { addChampion, levelDown } = result.current;

    act(() => {
      addChampion(aatroxMock);
      addChampion(aatroxMock);
      addChampion(camilleMock);
      levelDown();
    });

    expect(result.current.state.level).toEqual(2);
    expect(result.current.state.board.length).toEqual(2);
    expect(result.current.state.synergies.length).toEqual(2);

    act(() => {
      levelDown();
    });

    expect(result.current.state.level).toEqual(1);
    expect(result.current.state.board.length).toEqual(1);
    expect(result.current.state.synergies.length).toEqual(2);
  });

  // it("doesn't add a new champion when exceed the level",)
});
