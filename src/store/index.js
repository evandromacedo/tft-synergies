import { useReducer } from 'react';
import reducer from './reducer';

export const ADD_CHAMPION = 'ADD_CHAMPION';
export const REMOVE_CHAMPION = 'REMOVE_CHAMPION';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const firstState = {
  level: 9,
  synergies: [],
  board: []
};

const useSynergies = (initialState = firstState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    addChampion(champion) {
      dispatch({ type: ADD_CHAMPION, champion });
    },
    removeChampion(champion) {
      dispatch({ type: REMOVE_CHAMPION, champion });
    },
    addItem(champion, item) {
      dispatch({ type: REMOVE_CHAMPION, champion, item });
    },
    removeItem(champion, item) {
      dispatch({ type: REMOVE_CHAMPION, champion, item });
    }
  };
};

export default useSynergies;
