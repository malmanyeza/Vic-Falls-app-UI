import React from 'react';
import { Text,View, SafeAreaView,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomTab from '../components/BottomTab'
import SearchBar from '../components/SearchBar';
import HorizontalButtonList from '../components/HorizontalButtonList';
import GroupTourCardList from '../components/GroupTourCardList';
import CardList from '../components/CardList';

const MainScreen = ({navigation}) => {
  const goToGrpTourScreen=()=>{
    navigation.navigate('GrpTourScreen')
  }
    return(
      
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.toursTitle}>Welcome, Malvern👋</Text>
            <MaterialIcons name="apps" size={30} color="gray"  />
          </View>
          <SearchBar/>
          <HorizontalButtonList/>
          <View>
            <Text style={styles.toursTitle}>Places to visit</Text>
          </View>
          <CardList/>
          <View style={styles.toursTitleContainer}>
            <Text style={styles.toursTitle}>Group Tours</Text>
            <View style={styles.seeMoreContainer}>
             <Text style={styles.seeMore}>See more</Text>
             <MaterialIcons name="arrow-forward" size={18} color="gray" />
            </View>
          </View>
          <GroupTourCardList goToGrpTourScreen={goToGrpTourScreen}/>
          <BottomTab/>
      </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
  titleContainer:{
    flexDirection:'row',
    marginRight:20,
    marginTop:20,
    justifyContent:'space-between'
  },
  toursTitleContainer:{
    flexDirection:'row',
    marginRight:20,
    justifyContent:'space-between',
    alignItems:'center'
  },
  toursTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal:20,
  },
  seeMoreContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  seeMore:{
    color:'gray',
    fontSize:14
  }

})
export default MainScreen;