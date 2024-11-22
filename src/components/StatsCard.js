import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

export default function StatsCard({title, stats}) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statRow}>
            <Text style={styles.label}>{stat.label}</Text>
            <Text style={styles.value}>{stat.value}</Text>
          </View>
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    color: '#666',
  },
  value: {
    fontWeight: 'bold',
  },
});
