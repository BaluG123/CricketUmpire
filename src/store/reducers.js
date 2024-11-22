import {combineReducers} from 'redux';
import {MATCH_TYPES} from './types';

const initialMatchState = {
  currentMatch: null,
  savedMatches: [],
  score: 0,
  wickets: 0,
  balls: 0,
  overs: 0,
  extras: {
    wides: 0,
    noBalls: 0,
    legByes: 0,
    byes: 0,
  },
  timer: 0,
  isTimerRunning: false,
};

const matchReducer = (state = initialMatchState, action) => {
  switch (action.type) {
    case MATCH_TYPES.START_MATCH:
      return {
        ...state,
        currentMatch: action.payload,
        score: 0,
        wickets: 0,
        balls: 0,
        overs: 0,
        extras: {
          wides: 0,
          noBalls: 0,
          legByes: 0,
          byes: 0,
        },
        timer: 0,
        isTimerRunning: false,
      };

    case MATCH_TYPES.UPDATE_SCORE:
      return {
        ...state,
        score: action.payload.runs,
        wickets: action.payload.wickets,
      };

    case MATCH_TYPES.UPDATE_OVER:
      return {
        ...state,
        balls: action.payload.balls,
        overs: action.payload.overs,
      };

    case MATCH_TYPES.ADD_EXTRA:
      return {
        ...state,
        score: state.score + action.payload.runs,
        extras: {
          ...state.extras,
          [action.payload.extraType]:
            state.extras[action.payload.extraType] + 1,
        },
      };

    case MATCH_TYPES.UPDATE_TIMER:
      return {
        ...state,
        timer: action.payload,
      };

    case MATCH_TYPES.TOGGLE_TIMER:
      return {
        ...state,
        isTimerRunning: !state.isTimerRunning,
      };

    case MATCH_TYPES.SAVE_MATCH:
      return {
        ...state,
        savedMatches: [...state.savedMatches, action.payload],
      };

    case MATCH_TYPES.LOAD_MATCHES:
      return {
        ...state,
        savedMatches: action.payload,
      };

    default:
      return state;
  }
};

const initialSettingsState = {
  isDarkMode: false,
};

const settingsReducer = (state = initialSettingsState, action) => {
  switch (action.type) {
    case MATCH_TYPES.SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  match: matchReducer,
  settings: settingsReducer,
});
