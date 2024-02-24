import React from "react";
import { StyleSheet, ImageBackground } from 'react-native'

export const LandingScreen = () => {
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
      >
        {/* Your content goes here */}
      </ImageBackground>
    );
  };

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
  });