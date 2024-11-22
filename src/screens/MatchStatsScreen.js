import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import StatsCard from '../components/StatsCard';
import {calculateMatchStats} from '../utils/statsCalculator';
import {Text} from 'react-native-paper';

export default function MatchStatsScreen({route}) {
  const {matchId} = route.params;
  const {savedMatches} = useSelector(state => state.match);
  const match = savedMatches.find(m => m.matchId === matchId);
  const stats = calculateMatchStats(match);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Match Statistics</Text>

      <StatsCard
        title="Overview"
        stats={[
          {label: 'Final Score', value: `${match.score}/${match.wickets}`},
          {label: 'Overs', value: `${match.overs}.${match.balls}`},
          {label: 'Run Rate', value: stats.runRate.toFixed(2)},
        ]}
      />

      <StatsCard
        title="Extras"
        stats={[
          {label: 'Wides', value: match.extras.wides},
          {label: 'No Balls', value: match.extras.noBalls},
          {label: 'Leg Byes', value: match.extras.legByes},
          {label: 'Byes', value: match.extras.byes},
        ]}
      />

      <StatsCard
        title="Time Analysis"
        stats={[
          {label: 'Duration', value: stats.duration},
          {
            label: 'Over Rate',
            value: `${stats.overRate.toFixed(2)} overs/hour`,
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
