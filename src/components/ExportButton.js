import React from 'react';
import {Share} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {exportMatches} from '../utils/exportUtils';

export default function ExportButton() {
  const {savedMatches} = useSelector(state => state.match);

  const handleExport = async () => {
    try {
      const exportData = exportMatches(savedMatches);
      await Share.share({
        message: exportData,
        title: 'Cricket Match Data Export',
      });
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <Button icon="export" mode="contained" onPress={handleExport}>
      Export
    </Button>
  );
}
