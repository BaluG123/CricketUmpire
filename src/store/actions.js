import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {MATCH_TYPES} from './types';

export const startMatch = matchData => ({
  type: MATCH_TYPES.START_MATCH,
  payload: {
    ...matchData,
    matchId: uuid.v4(),
    startTime: new Date().toISOString(),
  },
});

export const updateScore = (runs, wickets) => ({
  type: MATCH_TYPES.UPDATE_SCORE,
  payload: {runs, wickets},
});

export const updateOver = (balls, overs) => ({
  type: MATCH_TYPES.UPDATE_OVER,
  payload: {balls, overs},
});

export const addExtra = (extraType, runs) => ({
  type: MATCH_TYPES.ADD_EXTRA,
  payload: {extraType, runs},
});

export const updateTimer = time => ({
  type: MATCH_TYPES.UPDATE_TIMER,
  payload: time,
});

export const toggleTimer = () => ({
  type: MATCH_TYPES.TOGGLE_TIMER,
});

export const setDarkMode = isDarkMode => ({
  type: MATCH_TYPES.SET_DARK_MODE,
  payload: isDarkMode,
});

// Async actions for data persistence
export const saveMatch = matchData => {
  return async dispatch => {
    try {
      const matches = await AsyncStorage.getItem('matches');
      const existingMatches = matches ? JSON.parse(matches) : [];
      const updatedMatches = [...existingMatches, matchData];

      await AsyncStorage.setItem('matches', JSON.stringify(updatedMatches));

      dispatch({
        type: MATCH_TYPES.SAVE_MATCH,
        payload: matchData,
      });
    } catch (error) {
      console.error('Error saving match:', error);
    }
  };
};

export const loadMatches = () => {
  return async dispatch => {
    try {
      const matches = await AsyncStorage.getItem('matches');
      const parsedMatches = matches ? JSON.parse(matches) : [];

      dispatch({
        type: MATCH_TYPES.LOAD_MATCHES,
        payload: parsedMatches,
      });
    } catch (error) {
      console.error('Error loading matches:', error);
    }
  };
};
