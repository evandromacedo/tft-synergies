import find from 'lodash/find';
import { ADD_CHAMPION, SET_BONUSES } from '..';
import synergiesReducer from './synergiesReducer';
import boardReducer from './boardReducer';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CHAMPION:
      const { champion } = action;

      // If champion is on board, add him with no new synergies
      if (find(state.board, { id: champion.id })) {
        return {
          ...state,
          board: boardReducer(state.board, action)
        };
      }

      // Else, return new synergies and board
      return {
        ...state,
        synergies: synergiesReducer(state.synergies, {
          ...action,
          bonuses: state.bonuses
        }),
        board: boardReducer(state.board, action)
      };

    case SET_BONUSES:
      return {
        ...state,
        bonuses: action.payload
      };

    default:
      return state;
  }
}
