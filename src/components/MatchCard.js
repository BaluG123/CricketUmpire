import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Card} from 'react-native-paper';

export default function MatchCard({match, onPress}) {
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.teams}>
            {match.team1} vs {match.team2}
          </Text>
          <Text style={styles.score}>
            {match.score}/{match.wickets} ({match.overs}.{match.balls})
          </Text>
          <Text style={styles.date}>{formatDate(match.startTime)}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  teams: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
