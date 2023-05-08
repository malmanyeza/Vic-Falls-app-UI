import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Card = ({ image, name, location }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardLocationContainer}>
          <FontAwesome name="map-marker" size={18} color="#89CFF0" />
          <Text style={styles.cardLocation}>{location}</Text>
        </View>
        <View style={styles.cardActivitiesContainer}>
          <Text style={styles.cardActivities}>Activities</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#89CFF0" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20, // increased border radius
    shadowColor: '#000',
    shadowOpacity: 0.3, // increased shadow opacity
    shadowRadius: 30,
    elevation: 5,
    marginTop: 10,
    marginHorizontal:20,
    marginBottom:20,
    width: 250, // set card width to 60% of screen width
  },
  cardImage: {
    borderRadius: 20, // increased border radius
    height: 150,
    margin: 8, // added margin to image
    shadowColor: '#000',
    shadowOpacity: 0.2, // added shadow opacity to image
    shadowRadius: 10,
  },
  cardTextContainer: {
    padding: 10,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLocation: {
    color: '#666',
    marginBottom: 10,
    marginLeft:5
  },
  cardLocationContainer:{
    flexDirection:'row'
  },
  cardActivitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  cardActivities: {
    backgroundColor: '#f1f1f1',
    color: '#666',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cardArrow: {
    height: 15,
    width: 15,
  },
});

export default Card;