import find from 'lodash/find';
import { getSynergyRanking } from '../../utils';
import { ADD_CHAMPION } from '..';

const initialState = {
  name: '',
  count: 0,
  ranking: ''
};

export default function synergiesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { synergies: championSynergies } = action.champion;
      const synergies = [...state];

      // Checks if champion synergies already exists
      championSynergies.forEach(synergyName => {
        const foundSynergy = find(synergies, { name: synergyName });

        // If found, adds +1 on count
        if (foundSynergy) {
          foundSynergy.count = foundSynergy.count + 1;
        }
        // Else, create a new one with initial count
        else {
          synergies.push({
            count: 1,
            name: synergyName,
            ranking: getSynergyRanking(
              1,
              action.bonuses[synergyName.toLowerCase()].bonuses
            )
          });
        }
      });

      return synergies;

    default:
      return null;
  }
}
