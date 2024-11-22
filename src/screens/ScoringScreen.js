import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, IconButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateScore,
  updateOver,
  addExtra,
  updateTimer,
  toggleTimer,
  saveMatch,
} from '../store/actions';

export default function ScoringScreen() {
  const dispatch = useDispatch();
  const {score, wickets, balls, overs, timer, isTimerRunning, currentMatch} =
    useSelector(state => state.match);
  const {isDarkMode} = useSelector(state => state.settings);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        dispatch(updateTimer(timer + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleLegalBall = () => {
    const newBalls = balls + 1;
    if (newBalls === 6) {
      dispatch(updateOver(0, overs + 1));
    } else {
      dispatch(updateOver(newBalls, overs));
    }
  };

  const handleExtra = (type, runs) => {
    dispatch(addExtra(type, runs));
  };

  const handleSaveMatch = () => {
    const matchData = {
      ...currentMatch,
      finalScore: score,
      finalWickets: wickets,
      finalOvers: overs,
      finalBalls: balls,
      endTime: new Date().toISOString(),
    };
    dispatch(saveMatch(matchData));
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>
          {score}/{wickets}
        </Text>
        <Text style={styles.overs}>
          Overs: {overs}.{balls}
        </Text>
      </View>

      <View style={styles.ballsContainer}>
        {[1, 2, 3, 4, 5, 6].map(num => (
          <View
            key={num}
            style={[styles.ballIndicator, balls >= num && styles.activeBall]}>
            <Text>{num}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          onPress={handleLegalBall}
          style={styles.button}>
          Legal Ball
        </Button>
        <Button mode="contained" onPress={handleExtra} style={styles.button}>
          Extra
        </Button>
      </View>

      <View style={styles.timerContainer}>
        <Text>
          Timer: {Math.floor(timer / 60)}:
          {(timer % 60).toString().padStart(2, '0')}
        </Text>
        <Button onPress={() => setIsTimerRunning(!isTimerRunning)}>
          {isTimerRunning ? 'Pause' : 'Start'} Timer
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  overs: {
    fontSize: 24,
  },
  ballsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ballIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBall: {
    backgroundColor: '#2196F3',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: '45%',
  },
  timerContainer: {
    alignItems: 'center',
  },
});
