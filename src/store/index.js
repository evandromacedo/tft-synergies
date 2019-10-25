import { useEffect, useReducer } from 'react';
import { getSynergies } from '../API';
import reducer from './reducers';
import { useSnackbar } from 'react-simple-snackbar';
import theme from '../components/App/theme';

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

const snackbarStyles = {
  color: '#fff',
  fontFamily: 'Beaufort',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  backgroundColor: `${theme.background2}`,
  borderRadius: '2px',
  borderTop: `2px solid ${theme.accentYellow}`,
  borderBottom: '2px solid #67502d',
  backgroundImage: `linear-gradient(to bottom,${theme.accentYellow},#67502d),linear-gradient(${theme.accentYellow}, #67502d)`,
  backgroundSize: '2px 100%',
  backgroundPosition: '0 0, 100% 0',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0 3px 5px -1px rgba(255, 255, 255, .2)'
};

const useSynergies = (initialState = firstState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openSnackbar] = useSnackbar({ style: snackbarStyles });

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
    removeChampion(index) {
      dispatch({ type: REMOVE_CHAMPION, index });
    },
    addItem(index, item) {
      dispatch({ type: ADD_ITEM, index, item, openSnackbar });
    },
    removeItem(index, item) {
      dispatch({ type: REMOVE_ITEM, index, item });
    },
    levelUp() {
      dispatch({ type: LEVEL_UP });
    },
    levelDown() {
      dispatch({ type: LEVEL_DOWN });
    },
    clearBoard() {
      dispatch({ type: CLEAR_BOARD });
    }
  };
};

export default useSynergies;
