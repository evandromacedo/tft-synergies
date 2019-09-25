import find from 'lodash/find';
import isEqual from 'lodash/isEqual';
import {
  ADD_CHAMPION,
  REMOVE_CHAMPION,
  ADD_ITEM,
  LEVEL_UP,
  LEVEL_DOWN,
  SET_BONUSES,
  CLEAR_BOARD
} from '..';
import synergiesReducer from './synergiesReducer';
import boardReducer from './boardReducer';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CHAMPION: {
      const { champion } = action;

      // If exceed the level, don't add the champion to board
      if (state.board.length === state.level) {
        return state;
      }

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
    }

    case REMOVE_CHAMPION:
      return {
        ...state,
        board: boardReducer(state.board, action),
        synergies: synergiesReducer(state.synergies, {
          ...action,
          bonuses: state.bonuses,
          board: state.board
        })
      };

    case ADD_ITEM: {
      const board = boardReducer([...state.board], action);
      let synergies = state.synergies;

      if (!isEqual(state.board, board)) {
        synergies = synergiesReducer(state.synergies, {
          ...action,
          bonuses: state.bonuses
        });
      }

      return {
        ...state,
        board,
        synergies
      };
    }

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

    case CLEAR_BOARD:
      return {
        ...state,
        board: [],
        synergies: []
      };

    default:
      return state;
  }
}
