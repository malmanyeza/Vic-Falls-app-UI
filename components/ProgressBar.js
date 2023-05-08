import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 7,
    borderRadius: 15,
    backgroundColor: '#daebe8',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#87bdd8',
    borderRadius:15
  }
});

export default ProgressBar;
