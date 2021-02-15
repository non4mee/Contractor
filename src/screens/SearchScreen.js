import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import platform, { opacify } from '../helpers/platform'

const WelcomeImage = require('../img/welcome.png')
import Button from '../components/molecules/Button'

function SearchScreen({ navigation }) {
  return (
    <ImageBackground source={WelcomeImage} style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Find a trustworthy contractor near you</Text>
        <View style={styles.buttonOne}>
          <Button text="Enter Suburb or Postcode"/>
          <View style={styles.buttonTwo}>
            <Button text="Who are you looking for?"/>
          </View>
          <View style={styles.buttonThree}>
            <Button text="Search" onPress={() => navigation.navigate('Research')}/>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  block: {
    flex: 1,
    backgroundColor: opacify(platform.brandSuccess, 0.75),
    alignItems: 'center'
  },
  title: {
    paddingTop: 104,
    textAlign: 'center',
    fontFamily: platform.fontExtraBold,
    color: platform.brandLight,
    fontSize: 32
  },
  buttonOne: {
    paddingTop: 10,
  },
  buttonTwo: {
    paddingTop: 10
  },
  buttonThree: {
    paddingTop: 10,

  }

})

export default SearchScreen
