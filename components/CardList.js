import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from './Card';

const DATA = [
  { id: '1', title: 'Mosi-oa-Tunya', image:require('../assets/images/victoria-falls-mosi oa tunya.jpg'), location:'15 minutes' },
  { id: '2', title: 'Tami Walker\'s Gallary', image:require('../assets/images/inside-the-tami-walker.jpg'), location:'22 minutes' },
  { id: '3', title: 'Ponte', image:require('../assets/images/ponte.jpg'), location:'28 minutes' },
  { id: '4', title: 'Crocodile farm', image:require('../assets/images/krokodile.jpg'), location:'30 minutes' },
  { id: '5', title: 'Vic Fall Snake Park', image:require('../assets/images/green-mamba.jpg'), location:"20 minutes"},
];

const CardList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <Card name={item.title} image={item.image} location={item.location} />
        </View>
    );
  
    return (
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  
  renderItemContainer: { 
    paddingVertical:20
  }
});

export default CardList;
