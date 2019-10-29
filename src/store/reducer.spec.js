import capitalize from 'lodash/capitalize';
import { renderHook, act } from '@testing-library/react-hooks';
import useSynergies, { firstState } from '.';
import { generateBonusesMock, generateChampionsMock } from './mock';
import * as Snackbar from 'react-simple-snackbar';

const openSnackbar = jest.fn();
jest.spyOn(Snackbar, 'useSnackbar').mockImplementation(() => [openSnackbar, jest.fn()]);

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

  it('removes a champion with more than one occurrences without removing the synergies', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion, removeChampion } = result.current;
    const aatroxMock = getChampion('Aatrox');

    act(() => {
      addChampion(aatroxMock);
      addChampion(aatroxMock);
      addChampion(aatroxMock);
      removeChampion(1);
    });

    expect(result.current.state.board.length).toEqual(2);
    expect(result.current.state.synergies.length).toEqual(2);
  });

  it('removes a champion with just one occurrence and removes its synergies', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion, removeChampion } = result.current;
    const camilleMock = getChampion('Camille');
    const dariusMock = getChampion('Darius');

    act(() => {
      addChampion(camilleMock);
      addChampion(dariusMock);
      addChampion(camilleMock);
      removeChampion(1);
    });

    expect(result.current.state.synergies.length).toEqual(2);
  });

  it("removes the champion's items synergies when removing the champion", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSynergies({ ...firstState, level: 2 })
    );
    await waitForNextUpdate();
    const { addChampion, addItem, removeChampion, levelDown } = result.current;
    const aatroxMock = getChampion('Aatrox');
    const yuumi = { name: 'yuumi', synergy: 'sorcerer' };
    const frozenMallet = { name: 'frozen mallet', synergy: 'glacial' };
    const knightsVow = { name: 'knights vow', synergy: 'knight' };

    act(() => {
      addChampion(aatroxMock);
      addItem(0, yuumi);
      addItem(0, frozenMallet);
      addItem(0, knightsVow);
      removeChampion(0);
    });

    expect(result.current.state.synergies).toEqual([]);

    act(() => {
      addChampion(aatroxMock);
      addChampion(aatroxMock);
      addItem(1, yuumi);
      addItem(1, frozenMallet);
      addItem(1, knightsVow);
      levelDown();
    });

    expect(result.current.state.synergies).toEqual([
      {
        count: 1,
        name: 'demon',
        ranking: 'partial'
      },
      {
        count: 1,
        name: 'blademaster',
        ranking: 'partial'
      }
    ]);
  });

  it('adds an item on champion and sums up synergy', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion, addItem } = result.current;
    const aatroxMock = getChampion('Aatrox');
    const yuumi = { name: 'yuumi', synergy: 'sorcerer' };

    act(() => {
      addChampion(aatroxMock);
      addItem(0, yuumi);
    });

    expect(result.current.state.board[0].items).toContainEqual(yuumi);
    expect(result.current.state.synergies).toContainEqual({
      name: 'sorcerer',
      count: 1,
      ranking: 'partial'
    });
  });

  it("doesn't add an item with the same synergy of the champion or if item is already on", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion, addItem } = result.current;
    const aatroxMock = getChampion('Aatrox');
    const darkin = { name: 'darkin', synergy: 'demon' };
    const yuumi = { name: 'yuumi', synergy: 'sorcerer' };

    act(() => {
      addChampion(aatroxMock);
      addItem(0, darkin);
    });

    expect(result.current.state.board[0].items).toEqual([]);
    expect(openSnackbar).toHaveBeenCalledWith(
      `${aatroxMock.name} is already a ${capitalize(darkin.synergy)}.`
    );

    act(() => {
      addItem(0, yuumi);
      addItem(0, yuumi);
    });

    expect(openSnackbar).toHaveBeenCalledWith(
      `${aatroxMock.name} is already a ${capitalize(yuumi.synergy)}.`
    );
    expect(result.current.state.board[0].items[1]).toBeUndefined();
    expect(result.current.state.synergies).toEqual([
      {
        count: 1,
        name: 'demon',
        ranking: 'partial'
      },
      {
        count: 1,
        name: 'blademaster',
        ranking: 'partial'
      },
      {
        count: 1,
        name: 'sorcerer',
        ranking: 'partial'
      }
    ]);
  });

  it('removes an item and its synergy', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const { addChampion, addItem, removeItem } = result.current;
    const aatroxMock = getChampion('Aatrox');
    const yuumi = { name: 'yuumi', synergy: 'sorcerer' };
    const frozenMallet = { name: 'frozen mallet', synergy: 'glacial' };
    const knightsVow = { name: 'knights vow', synergy: 'knight' };

    act(() => {
      addChampion(aatroxMock);
      addItem(0, yuumi);
      removeItem(0, yuumi);
    });

    expect(result.current.state.board[0].items).toEqual([]);
    expect(result.current.state.synergies).toEqual([
      {
        count: 1,
        name: 'demon',
        ranking: 'partial'
      },
      {
        count: 1,
        name: 'blademaster',
        ranking: 'partial'
      }
    ]);

    act(() => {
      addItem(0, yuumi);
      addItem(0, frozenMallet);
      addItem(0, knightsVow);
      removeItem(0, frozenMallet);
    });

    expect(result.current.state.board[0].items).toEqual([yuumi, knightsVow]);
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

  it("doesn't add a new champion when exceed the level", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSynergies({ ...firstState, level: 2 })
    );
    await waitForNextUpdate();
    const aatroxMock = getChampion('Aatrox');
    const { addChampion } = result.current;

    act(() => {
      addChampion(aatroxMock);
      addChampion(aatroxMock);
      addChampion(aatroxMock);
    });

    expect(result.current.state.board.length).toEqual(2);
  });

  it('clears the board and synergies', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSynergies());
    await waitForNextUpdate();
    const aatroxMock = getChampion('Aatrox');
    const camilleMock = getChampion('Camille');
    const dariusMock = getChampion('Darius');
    const { addChampion, clearBoard } = result.current;

    act(() => {
      addChampion(aatroxMock);
      addChampion(camilleMock);
      addChampion(dariusMock);
      clearBoard();
    });

    expect(result.current.state.board).toEqual([]);
    expect(result.current.state.synergies).toEqual([]);
  });
});
