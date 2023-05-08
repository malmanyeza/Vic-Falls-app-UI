import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

const FaintBlueButton = ({title}) => {
  const [isActive, setIsActive] = useState(false);

  const buttonWidth = Math.min(0.5 * width, title.length * 20);

  const buttonStyle = isActive ? styles.activeButton : styles.inactiveButton;
  const buttonText = isActive ? styles.activeText : styles.inactiveText;

  const handlePressIn = () => {
    setIsActive(true);
  };

  const handlePressOut = () => {
    setIsActive(false);
  };

  return (
    <TouchableOpacity
      style={[buttonStyle, { width: buttonWidth }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inactiveButton: {
    marginBottom:20,
    margin:10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  activeButton: {
    margin:10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#bfe6ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f6ff',
  },
  inactiveText: {
    color: '#444',
    fontSize: 16,
  },
  activeText: {
    color: '#007aff',
    fontSize: 16,
  },
});

export default FaintBlueButton;
