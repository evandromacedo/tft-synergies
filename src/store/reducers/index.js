import find from 'lodash/find';
import { ADD_CHAMPION, LEVEL_UP, LEVEL_DOWN, SET_BONUSES } from '..';
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

    case LEVEL_UP:
      if (state.level === 9) {
        return state;
      }

      return { ...state, level: state.level + 1 };

    case LEVEL_DOWN:
      if (state.level === 1) {
        return state;
      }

      const newLevel = state.level - 1;

      if (newLevel < state.board.length) {
        return {
          ...state,
          board: boardReducer(state.board, { ...action, newLevel }),
          synergies: synergiesReducer(state.synergies, {
            ...action,
            bonuses: state.bonuses,
            board: state.board
          }),
          level: newLevel
        };
      }

      return {
        ...state,
        level: newLevel
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
