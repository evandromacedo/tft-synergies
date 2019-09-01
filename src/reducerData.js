import { useReducer } from 'react';
import find from 'lodash/find';

const ADD_CHAMPION = 'ADD_CHAMPION';
const REMOVE_CHAMPION = 'REMOVE_CHAMPION';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const initialState = {
  synergies: [],
  board: []
};

const synergiesReducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAMPION:
      const addedChampion = action.champion;

      // If champion is on board, add him with no new synergies
      if (find(state.board, { id: addedChampion.id })) {
        return {
          synergies: [...state.synergies],
          board: [...state.board, addedChampion]
        };
      }

      // Ah vai tomar no cu
      let synergiesState = [...state.synergies];
      const { synergies: championSynergies } = addedChampion;

      championSynergies.forEach(synergyName => {
        const hasSynergy = find(synergiesState, { name: synergyName });

        if (hasSynergy) {
          hasSynergy.quantity = hasSynergy.quantity + 1;
        } else {
          synergiesState.push({
            name: synergyName,
            quantity: 1
          });
        }
      });

      return {
        synergies: synergiesState,
        board: [...state.board, addedChampion]
      };

    // case REMOVE_CHAMPION:
    default:
      throw new Error('Opa');
  }
};

const useSynergies = () => {
  const [state, dispatch] = useReducer(synergiesReducer, initialState);

  function addChampion(champion) {
    dispatch({ type: ADD_CHAMPION, champion });
  }

  function removeChampion(champion) {
    dispatch({ type: REMOVE_CHAMPION, champion });
  }

  function addItem(champion, item) {
    dispatch({ type: REMOVE_CHAMPION, champion, item });
  }

  function removeItem(champion, item) {
    dispatch({ type: REMOVE_CHAMPION, champion, item });
  }

  return { state, addChampion, removeChampion, addItem, removeItem };
};

export default useSynergies;
