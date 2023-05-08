import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#9B9B9B" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Destination"
        placeholderTextColor="#9B9B9B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    height: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomColor:'white'
  },
});

export default SearchBar;
