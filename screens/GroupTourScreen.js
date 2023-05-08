import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AvatarLine from '../components/AvatorLine';
import ProgressBar from '../components/ProgressBar';
import { color } from 'react-native-elements/dist/helpers';

const BACKGROUND_IMAGE = require('../assets/images/chobe.jpg');
const MAP_IMAGE = require('../assets/images/chobe-VicFalls.webp');

const GroupTourScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <Image
          source={BACKGROUND_IMAGE}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.topLeftContainer}>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name="arrow-back" size={24} color="#FFF" />
            </TouchableOpacity>
             <View style={styles.verticalLine} />
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.nameAndDistance}>
            <Text style={styles.tourName}>
               Chobe
            </Text>
            <Text style={styles.distance}>
              Total distance - 20km
            </Text>
        </View>
        <View style={styles.corneredIcons}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="gray" />
            </TouchableOpacity>
             <View style={styles.verticalLine2} />
            <TouchableOpacity>
                <Text style={{color:'gray'}}>4.5</Text>
                <Ionicons name="star" size={22} color="orange" />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <View>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <Text style={styles.time}>
                    Starts at :  
                </Text>
                <Text style={styles.digits}>
                    {" "}8:30a.m 
                </Text>
            </View>
        
            <Text style={styles.time}>
            Duration: 5 hours
            </Text>
        </View>
        
        <View style={styles.progressCorner}>
            <View style={styles.avatarContainer}>
                <AvatarLine/>
            </View>
            <ProgressBar progress={12}/>
        </View>
      </View>
      <View style={styles.mapImageContainer}>
        <Image
          source={MAP_IMAGE}
          resizeMode='stretch'
          style={styles.mapImage}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join This Tour</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  secondContainer:{
    top:'40%',
    flexDirection:'row',
    margin:10,
    alignItems:'center', 
    justifyContent:'space-between',
   
  },
  thirdContainer:{
    top:"40%",
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '60%',
    margin: 10,
    overflow: 'hidden',
    elevation: 5,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    shadowColor: '#87bdd8',
    shadowOpacity: 0.7, // added shadow opacity to image
    shadowRadius: 30
  },
  backgroundImage: {
    flex: 1,
  },
  topLeftContainer: {
    position: 'absolute',
    top: 30,
    left: 10,
    width: 120,
    height: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius:20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingLeft: 10,
    paddingRight: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    height: 24,
    width: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 15,
  },
  verticalLine2: {
    height: 40,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 15,
  },
  nameAndDistance:{
   
  },
  tourName:{
    fontSize:28,
    fontWeight:'bold',
    margin:10
  },
  distance:{
    fontSize:20,
    marginLeft:10,
    color:'gray'
  },
  corneredIcons:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:20
  },
  time:{
    fontSize:18,
    color:'gray'
  },
  digits:{
    fontSize:18,
    color:'#87bdd8',
    fontWeight:'bold'
  },
  progressCorner:{
    width:'40%'
  },
  avatarContainer:{
    marginLeft:150,
    marginBottom:10
  },
  mapImageContainer:{
    top:'40%',
    borderRadius:20,
    height:150,
    margin:20
  },
  mapImage:{
    borderRadius:20,
    flex:1
  },
  button:{
    top:'40%',
    height:50,
    margin:20,
    backgroundColor:'#4285F4',
    borderRadius:25,
    justifyContent:'center'
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontSize:20
  }
});

export default GroupTourScreen;