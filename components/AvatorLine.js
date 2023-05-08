import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AvatarLine = () => {
  return (
    <View style={styles.container}>
      <Image style={[styles.avatar, { zIndex: 4, right: 12 }]} source={require('../assets/images/tanya.jpg')} />
      <Image style={[styles.avatar, { zIndex: 3, right: 24 }]} source={require('../assets/images/woman.jpg')} />
      <Image style={[styles.avatar, { zIndex: 2, right: 36 }]} source={require('../assets/images/man.jpg')} />
      <Image style={[styles.avatar, { zIndex: 1, right: 48 }]} source={require('../assets/images/gteacher.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginBottom:5
  },
  avatar: {
    resizeMode:'cover',
    width: 26,
    height: 26,
    borderRadius: 13,
    marginHorizontal: -14,
    borderWidth: 2,
    borderColor: '#fff',
    
  },
});

export default AvatarLine;
