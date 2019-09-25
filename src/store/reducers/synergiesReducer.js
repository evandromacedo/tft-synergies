import find from 'lodash/find';
import { getSynergyRanking } from '../../utils';
import { ADD_CHAMPION, REMOVE_CHAMPION, ADD_ITEM, LEVEL_DOWN } from '..';

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

      const synergies = removeSynergies(removedChampion, action.bonuses, state);
      return synergies;
    }

    case ADD_ITEM: {
      const synergies = addSynergies([action.item.synergy], action.bonuses, state);
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

      const synergies = removeSynergies(lastChampion, action.bonuses, state);
      return synergies;
    }

    default:
      return state;
  }
}

function addSynergies(championSynergies, bonuses, state) {
  const synergies = [...state];

  championSynergies.forEach(synergyName => {
    const foundSynergy = find(synergies, { name: synergyName });

    // If found, adds +1 on count with new ranking
    if (foundSynergy) {
      const newCount = foundSynergy.count + 1;
      foundSynergy.count = newCount;
      foundSynergy.ranking = getSynergyRanking(newCount, bonuses[synergyName].bonuses);
    }
    // Else, create a new one with initial count
    else {
      synergies.push({
        count: 1,
        name: synergyName,
        ranking: getSynergyRanking(1, bonuses[synergyName].bonuses)
      });
    }
  });

  return synergies;
}

function removeSynergies(champion, bonuses, state) {
  const synergies = [...state];

  champion.synergies.forEach(synergyName => {
    const foundSynergy = find(synergies, { name: synergyName });

    // Decreases -1 or deletes synergy
    if (foundSynergy.count > 1) {
      const newCount = foundSynergy.count - 1;
      foundSynergy.count = newCount;
      foundSynergy.ranking = getSynergyRanking(newCount, bonuses[synergyName].bonuses);
    } else {
      const index = synergies.findIndex(synergy => synergy.name === foundSynergy.name);
      synergies.splice(index, 1);
    }
  });

  return synergies;
}
