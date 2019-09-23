import { ADD_CHAMPION } from '..';

const initialState = {
  id: null,
  key: '',
  name: '',
  cost: 0,
  synergies: []
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { champion } = action;
      const { id, key, name, cost, synergies } = champion;
      return [...state, { id, key, name, cost, synergies }];

    default:
      return null;
  }
}
