import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={activeTab === 0 ? styles.activeTab : styles.tab}
        onPress={() => handleTabPress(0)}
      >
        <Ionicons name="home-outline" size={24} color={activeTab === 0 ? '#4285F4' : 'black'} />
        {activeTab === 0 && <View style={styles.dot} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 1 ? styles.activeTab : styles.tab}
        onPress={() => handleTabPress(1)}
      >
        <Ionicons name="compass-outline" size={24} color={activeTab === 1 ? '#4285F4' : 'black'} />
        {activeTab === 1 && <View style={styles.dot} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 2 ? styles.activeTab : styles.tab}
        onPress={() => handleTabPress(2)}
      >
        <Ionicons name="md-walk" size={24} color={activeTab === 2 ? '#4285F4' : 'black'} />
        {activeTab === 2 && <View style={styles.dot} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 3 ? styles.activeTab : styles.tab}
        onPress={() => handleTabPress(3)}
      >
        <Ionicons name="person-outline" size={24} color={activeTab === 3 ? '#4285F4' : 'black'} />
        {activeTab === 3 && <View style={styles.dot} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    position:'absolute',
    width:'100%',
    bottom:0,
    marginBottom:20
  },
  tab: {
    alignItems: 'center',
  },
  activeTab: {
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4285F4',
    marginTop: 4,
  },
});

export default BottomTab;
