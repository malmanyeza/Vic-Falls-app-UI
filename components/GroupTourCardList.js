import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GroupTourCard from './GroupTourCard';

const DATA = [
  { id: '1', title: 'Scenic Helicopter ride', image:require('../assets/images/helicopter-ride.jpg'), distance:'15 km',price:'$102',progress:46 },
  { id: '2', title: 'Chobe full day trip', image:require('../assets/images/chobe.jpg'), distance:'22 km', price:'$64',progress:71 },
  { id: '3', title: 'Zambezi river Dinner Cruise', image:require('../assets/images/zambezi-cruise.jpg'), distance:'5km',price:'$50',progress:12 },
  { id: '4', title: 'Vic Falls Canopy Tour', image:require('../assets/images/canopy-tour.jpg'), distance:'3km', price:'$65',progress:63 },
];

const GroupTourCardList = ({goToGrpTourScreen}) => {

 
    const renderItem = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <GroupTourCard 
            name={item.title} 
            imageSource={item.image} 
            progress={item.progress}
            price={item.price} 
            distance={item.distance}
            goToGrpTourScreen={goToGrpTourScreen}
            />
        </View>
    );
  
    return (
      <View style={styles.container}>
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
  container: {
    flex: 1
  },
  renderItemContainer: {
    flex:1,
    paddingTop:20,
    paddingLeft:10
  }
});

export default GroupTourCardList;
