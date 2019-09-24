import find from 'lodash/find';
import { getSynergyRanking } from '../../utils';
import { ADD_CHAMPION, LEVEL_DOWN } from '..';

const initialState = [];

// {
//   name: 'blademaster',
//   count: 2,
//   ranking: 'bronze'
// };

export default function synergiesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION: {
      const { synergies: championSynergies } = action.champion;
      const synergies = [...state];

      // Checks if champion synergies already exists
      championSynergies.forEach(synergyName => {
        const foundSynergy = find(synergies, { name: synergyName });

        // If found, adds +1 on count with new ranking
        if (foundSynergy) {
          const newCount = foundSynergy.count + 1;
          foundSynergy.count = newCount;
          foundSynergy.ranking = getSynergyRanking(
            newCount,
            action.bonuses[synergyName].bonuses
          );
        }
        // Else, create a new one with initial count
        else {
          synergies.push({
            count: 1,
            name: synergyName,
            ranking: getSynergyRanking(1, action.bonuses[synergyName].bonuses)
          });
        }
      });

      return synergies;
    }

    case LEVEL_DOWN: {
      // Checks if there's last champion on board
      const championOccurrences = action.board.filter(
        champion => champion.id === action.lastChampion.id
      ).length;

      if (championOccurrences >= 2) {
        return state;
      }

      const synergies = [...state];

      action.lastChampion.synergies.forEach(synergyName => {
        const foundSynergy = find(synergies, { name: synergyName });

        // Decreases -1 or deletes synergy
        if (foundSynergy.count > 1) {
          foundSynergy.count = foundSynergy.count - 1;
        } else {
          const index = synergies.findIndex(
            synergy => synergy.name === foundSynergy.name
          );
          synergies.splice(index, 1);
        }
      });

      return synergies;
    }

    default:
      return null;
  }
}
