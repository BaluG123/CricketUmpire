import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default function SignalsScreen() {
  const signals = [
    {name: 'Wide Ball', action: () => console.log('Wide Ball')},
    {name: 'No Ball', action: () => console.log('No Ball')},
    {name: 'Dead Ball', action: () => console.log('Dead Ball')},
    {name: 'Boundary 4', action: () => console.log('Boundary 4')},
    {name: 'Boundary 6', action: () => console.log('Boundary 6')},
    {name: 'Out', action: () => console.log('Out')},
    {name: 'Leg Bye', action: () => console.log('Leg Bye')},
    {name: 'Bye', action: () => console.log('Bye')},
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Common Signals</Text>
      <View style={styles.signalsGrid}>
        {signals.map((signal, index) => (
          <Button
            key={index}
            mode="outlined"
            onPress={signal.action}
            style={styles.signalButton}>
            {signal.name}
          </Button>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  signalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  signalButton: {
    width: '48%',
    marginBottom: 10,
  },
});
