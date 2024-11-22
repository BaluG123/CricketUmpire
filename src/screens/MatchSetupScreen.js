import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, RadioButton, Text} from 'react-native-paper';

export default function MatchSetupScreen({navigation}) {
  const [matchFormat, setMatchFormat] = useState('T20');
  const [team1Name, setTeam1Name] = useState('Team 1');
  const [team2Name, setTeam2Name] = useState('Team 2');

  const handleStartMatch = () => {
    navigation.navigate('MainApp', {
      matchFormat,
      team1Name,
      team2Name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Setup</Text>

      <RadioButton.Group
        onValueChange={value => setMatchFormat(value)}
        value={matchFormat}>
        <View style={styles.radioGroup}>
          <RadioButton.Item label="T20" value="T20" />
          <RadioButton.Item label="ODI" value="ODI" />
          <RadioButton.Item label="Test" value="Test" />
        </View>
      </RadioButton.Group>

      <TextInput
        label="Team 1 Name"
        value={team1Name}
        onChangeText={setTeam1Name}
        style={styles.input}
      />

      <TextInput
        label="Team 2 Name"
        value={team2Name}
        onChangeText={setTeam2Name}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleStartMatch} style={styles.button}>
        Start Match
      </Button>
    </View>
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
  radioGroup: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
