import find from 'lodash/find';
import { ADD_CHAMPION, REMOVE_CHAMPION, ADD_ITEM, REMOVE_ITEM } from '.';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CHAMPION:
      const addedChampion = action.champion;
      const previousSynergies = [...state.synergies];

      // If champion is on board, add him with no new synergies
      if (find(state.board, { id: addedChampion.id })) {
        return {
          synergies: previousSynergies,
          board: [...state.board, addedChampion]
        };
      }

      // Checks if champion synergies already exists
      const { synergies: championSynergies } = addedChampion;

      championSynergies.forEach(synergyName => {
        const hasSynergy = find(previousSynergies, { name: synergyName });

        // Adds +1 or create a new one
        if (hasSynergy) {
          hasSynergy.quantity = hasSynergy.quantity + 1;
        } else {
          previousSynergies.push({
            name: synergyName,
            quantity: 1
          });
        }
      });

      return {
        synergies: previousSynergies,
        board: [...state.board, addedChampion]
      };

    // case REMOVE_CHAMPION:
    default:
      return state;
  }
};

export default reducer;
