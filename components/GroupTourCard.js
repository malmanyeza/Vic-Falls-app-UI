import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import AvatarLine from './AvatorLine';

const progress= 75
const GroupTourCard = ({ imageSource, name, price, distance, progress,goToGrpTourScreen }) => {
  return (
    <TouchableOpacity onPress={goToGrpTourScreen} style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.perPerson}>/per person</Text>
        </View>
        <Text style={styles.distance}>{distance}</Text>
        <View style={styles.progressContainer}>
          <View style={styles.avatarContainer}>
           <AvatarLine/>
           <Text style={styles.progressText}>{progress}%</Text>
          </View>
          <ProgressBar progress={progress} />
        </View>
      </View>
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  container: {
    width:300,
    height:150,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 10,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 50,
    elevation: 10,
  },
  image: {
    width: '40%',
    height: '90%',
    borderRadius:22,
    marginHorizontal:8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    marginRight:3
  },
  perPerson:{
    marginTop:3,
    color:'#87bdd8',
    fontSize:12
  },
  distance: {
    fontSize: 14,
    marginTop: 5,
  },
  avatarContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:65,
    alignItems:'center'
  },
  progressContainer: {
    marginTop: 10,
  },
  progressText: {
    fontSize: 12,
    color:'#87bdd8'
  },
});

export default GroupTourCard;
