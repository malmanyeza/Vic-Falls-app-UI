import { VERSION } from 'lodash';
import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FaintBlueButton from './FaintButton';

const DATA = [
  { id: '1', title: '🛋️Accomodation' },
  { id: '2', title: '🍜Restaurents' },
  { id: '3', title: '🚕Transport' },
  { id: '4', title: '🌦️Weather News' },
];

const HorizontalButtonList = () => {
  const renderButton = ({ item }) => (
    <View style={styles.renderItemContainer}>
       <FaintBlueButton title={item.title}/>
    </View>
  );

  return (
    <View >
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderButton}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
  renderItemContainer: {
    flex:1,
  }
});

export default HorizontalButtonList;
