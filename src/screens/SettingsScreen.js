import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch, Text, Button} from 'react-native-paper';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text>Vibration</Text>
        <Switch
          value={isVibrationEnabled}
          onValueChange={setIsVibrationEnabled}
        />
      </View>

      <Button
        mode="contained"
        onPress={() => console.log('Reset App')}
        style={styles.resetButton}>
        Reset App
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resetButton: {
    marginTop: 20,
  },
});
