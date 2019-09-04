import find from 'lodash/find';
import { ADD_CHAMPION, SET_BONUSES } from '.';
import { getSynergyRanking } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAMPION:
      const addedChampion = action.champion;
      const synergiesState = [...state.synergies];

      // If champion is on board, add him with no new synergies
      if (find(state.board, { id: addedChampion.id })) {
        return {
          ...state,
          board: [...state.board, addedChampion]
        };
      }

      // Checks if champion synergies already exists
      const { synergies: championSynergies } = addedChampion;

      championSynergies.forEach(synergyName => {
        const hasSynergy = find(synergiesState, { name: synergyName });

        // Adds +1 or create a new one
        if (hasSynergy) {
          hasSynergy.count = hasSynergy.count + 1;
        } else {
          synergiesState.push({
            count: 1,
            name: synergyName,
            ranking: getSynergyRanking(1, state.bonuses[synergyName])
          });
        }
      });

      // Return new synergies and board
      const { id, name, synergies } = addedChampion;

      return {
        ...state,
        synergies: synergiesState,
        board: [...state.board, { id, name, synergies }]
      };

    case SET_BONUSES:
      return {
        ...state,
        bonuses: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
