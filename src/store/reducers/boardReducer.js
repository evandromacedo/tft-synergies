import { ADD_CHAMPION, REMOVE_CHAMPION, ADD_ITEM, REMOVE_ITEM, LEVEL_DOWN } from '..';

const initialState = [];

// {
//   id: 50,
//   key: 'aatrox',
//   name: 'Aatrox',
//   cost: 3,
//   synergies: ['demon', 'blademaster'],
//   items: ['yuumi']
// };

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { champion } = action;
      const { id, key, name, cost, synergies } = champion;
      return [...state, { id, key, name, cost, synergies, items: [] }];

    case REMOVE_CHAMPION:
      const { index } = action;
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case ADD_ITEM: {
      const champion = { ...state[action.index] };

      if (
        champion.synergies.includes(action.item.synergy) ||
        champion.items.includes(action.item)
      ) {
        return state;
      }

      champion.items = [...champion.items, action.item];

      return [
        ...state.slice(0, action.index),
        champion,
        ...state.slice(action.index + 1)
      ];
    }

    case REMOVE_ITEM: {
      const champion = { ...state[action.index] };
      const itemIndex = champion.items.findIndex(item => item.name === action.item.name);
      champion.items = [
        ...champion.items.slice(0, itemIndex),
        ...champion.items.slice(itemIndex + 1)
      ];

      return [
        ...state.slice(0, action.index),
        champion,
        ...state.slice(action.index + 1)
      ];
    }

    case LEVEL_DOWN:
      if (action.newLevel < state.length) {
        return [...state.slice(0, state.length - 1)];
      }

      return state;

    default:
      return state;
  }
}
