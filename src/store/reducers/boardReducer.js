import { ADD_CHAMPION, REMOVE_CHAMPION, LEVEL_DOWN } from '..';

const initialState = [];

// {
//   id: 50,
//   key: 'aatrox',
//   name: 'Aatrox',
//   cost: 3,
//   synergies: ['demon', 'blademaster']
// };

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { champion } = action;
      const { id, key, name, cost, synergies } = champion;
      return [...state, { id, key, name, cost, synergies }];

    case REMOVE_CHAMPION:
      const { index } = action;
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case LEVEL_DOWN:
      if (action.newLevel < state.length) {
        return [...state.slice(0, state.length - 1)];
      }

      return state;

    default:
      return null;
  }
}
