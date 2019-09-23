import { ADD_CHAMPION } from '..';

const initialState = {
  id: null,
  name: '',
  synergies: []
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { champion } = action;
      const { id, name, synergies } = champion;
      return [...state, { id, name, synergies }];

    default:
      return null;
  }
}
