import { useEffect, useReducer } from 'react';
import { getSynergies } from '../API';
import reducer from './reducers';

export const ADD_CHAMPION = 'ADD_CHAMPION';
export const REMOVE_CHAMPION = 'REMOVE_CHAMPION';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LEVEL_UP = 'LEVEL_UP';
export const LEVEL_DOWN = 'LEVEL_DOWN';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const SET_BONUSES = 'SET_BONUSES';

export const firstState = {
  level: 9,
  synergies: [],
  board: [],
  bonuses: {}
};

const useSynergies = (initialState = firstState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch bonuses details and dispatches to "bonuses"
  useEffect(() => {
    async function fetchSynergies() {
      const payload = await getSynergies();
      dispatch({
        type: SET_BONUSES,
        payload
      });
    }

    fetchSynergies();
  }, []);

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
    },
    levelUp() {
      dispatch({ type: LEVEL_UP });
    },
    levelDown() {
      dispatch({ type: LEVEL_DOWN });
    }
  };
};

export default useSynergies;
