import { renderHook, act } from '@testing-library/react-hooks';
import useSynergies, { firstState } from '.';

describe('Synergies Reducer', () => {
  it('returns an initialState', () => {
    const { result } = renderHook(() => useSynergies());
    const { state } = result.current;

    expect(state).toEqual(firstState);
  });

  it('adds a brand new champion', () => {
    const { result } = renderHook(() => useSynergies());
    const { addChampion } = result.current;

    act(() => {
      addChampion({
        id: 67,
        name: 'vayne',
        synergies: ['noble', 'ranger']
      });
    });

    expect(result.current.state.synergies).toEqual([
      {
        name: 'noble',
        quantity: 1
      },
      {
        name: 'ranger',
        quantity: 1
      }
    ]);

    expect(result.current.state.board).toEqual([
      {
        id: 67,
        name: 'vayne',
        synergies: ['noble', 'ranger']
      }
    ]);
  });

  it('adds an existing champion without adding synergies', () => {
    const vayne = {
      id: 67,
      name: 'vayne',
      synergies: ['noble', 'ranger']
    };

    const { result } = renderHook(() => useSynergies());
    const { addChampion } = result.current;

    act(() => {
      addChampion(vayne);
      addChampion(vayne);
    });

    expect(result.current.state.synergies).toEqual([
      {
        name: 'noble',
        quantity: 1
      },
      {
        name: 'ranger',
        quantity: 1
      }
    ]);

    expect(result.current.state.board).toEqual([
      {
        id: 67,
        name: 'vayne',
        synergies: ['noble', 'ranger']
      },
      {
        id: 67,
        name: 'vayne',
        synergies: ['noble', 'ranger']
      }
    ]);
  });
});
