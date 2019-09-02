import { renderHook, act } from '@testing-library/react-hooks';
import useSynergies from '.';

describe('Synergies Reducer', () => {
  it('returns an initialState', () => {
    const { result } = renderHook(() => useSynergies());
    const { state } = result.current;

    expect(state).toMatchObject({
      synergies: [],
      board: []
    });
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

    expect(result.current.state.synergies).toMatchObject([
      {
        name: 'noble',
        quantity: 1
      },
      {
        name: 'ranger',
        quantity: 1
      }
    ]);

    expect(result.current.state.board).toMatchObject([
      {
        id: 67,
        name: 'vayne',
        synergies: ['noble', 'ranger']
      }
    ]);
  });
});
