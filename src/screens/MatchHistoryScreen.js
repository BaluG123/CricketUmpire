import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MatchCard from '../components/MatchCard';
import ExportButton from '../components/ExportButton';
import {Text, Button} from 'react-native-paper';

export default function MatchHistoryScreen({navigation}) {
  const {savedMatches} = useSelector(state => state.match);
  const {isDarkMode} = useSelector(state => state.settings);

  const renderItem = ({item}) => (
    <MatchCard
      match={item}
      onPress={() => navigation.navigate('MatchStats', {matchId: item.matchId})}
    />
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <Text style={styles.title}>Match History</Text>
        <ExportButton />
      </View>

      <FlatList
        data={savedMatches}
        renderItem={renderItem}
        keyExtractor={item => item.matchId}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No matches found</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
