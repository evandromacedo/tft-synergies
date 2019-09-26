import find from 'lodash/find';
import { getSynergyRanking } from '../../utils';
import { ADD_CHAMPION, REMOVE_CHAMPION, ADD_ITEM, REMOVE_ITEM, LEVEL_DOWN } from '..';

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
      const synergies = addSynergies(championSynergies, action.bonuses, state);
      return synergies;
    }

    case REMOVE_CHAMPION: {
      // Checks if there are removed champion occurences on board
      const removedChampion = action.board[action.index];
      const championOccurrences = action.board.filter(champion => {
        return champion.id === removedChampion.id;
      }).length;

      if (championOccurrences > 1) {
        return state;
      }

      const { synergies: championSynergies } = removedChampion;
      const synergies = removeSynergies(championSynergies, action.bonuses, state);
      return synergies;
    }

    case ADD_ITEM: {
      const synergies = addSynergies([action.item.synergy], action.bonuses, state);
      return synergies;
    }

    case REMOVE_ITEM: {
      // console.log(action);
      const synergies = removeSynergies([action.item.synergy], action.bonuses, state);
      return synergies;
    }

    case LEVEL_DOWN: {
      // Checks if there are last champion occurences on board
      const lastChampion = action.board.slice(-1)[0];
      const championOccurrences = action.board.filter(champion => {
        return champion.id === lastChampion.id;
      }).length;

      if (championOccurrences > 1) {
        return state;
      }

      const { synergies: championSynergies } = lastChampion;
      const synergies = removeSynergies(championSynergies, action.bonuses, state);
      return synergies;
    }

    default:
      return state;
  }
}

function addSynergies(synergiesList, bonuses, state) {
  let synergies = [...state];

  synergiesList.forEach(synergyName => {
    const foundSynergy = find(synergies, { name: synergyName });

    // If found, adds +1 on count with new ranking
    if (foundSynergy) {
      const newCount = foundSynergy.count + 1;
      const newSynergy = {
        name: foundSynergy.name,
        count: newCount,
        ranking: getSynergyRanking(newCount, bonuses[synergyName].bonuses)
      };
      const foundIndex = synergies.findIndex(
        synergy => synergy.name === foundSynergy.name
      );
      synergies = [
        ...synergies.slice(0, foundIndex),
        newSynergy,
        ...synergies.slice(foundIndex + 1)
      ];
    }
    // Else, create a new one with initial count
    else {
      synergies = [
        ...synergies,
        {
          count: 1,
          name: synergyName,
          ranking: getSynergyRanking(1, bonuses[synergyName].bonuses)
        }
      ];
    }
  });

  return synergies;
}

function removeSynergies(synergiesList, bonuses, state) {
  let synergies = [...state];

  synergiesList.forEach(synergyName => {
    const foundSynergy = find(synergies, { name: synergyName });

    // Decreases -1 or deletes synergy
    if (foundSynergy.count > 1) {
      const newCount = foundSynergy.count - 1;
      foundSynergy.count = newCount;
      foundSynergy.ranking = getSynergyRanking(newCount, bonuses[synergyName].bonuses);
    } else {
      const index = synergies.findIndex(synergy => synergy.name === foundSynergy.name);
      synergies = [...synergies.slice(0, index), ...synergies.slice(index + 1)];
    }
  });

  return synergies;
}
