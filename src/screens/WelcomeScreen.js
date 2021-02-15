import React, { useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native'
import platform, { opacify } from '../helpers/platform'

const WelcomeImage = require('../img/welcome.png')

import Button from '../components/molecules/Button'

function WelcomeScreen({ navigation, signIn }) {
  return (
    <ImageBackground source={WelcomeImage} style={styles.container}>
      <View style={styles.block}>
        <Image style={styles.img} source={require('../img/logo.png')}/>
          <Text style={styles.title}>Find a trustworthy contractor near you</Text>
          <Button
            styleButton={styles.btn}
            styleText={styles.titleText}
            text='Login'
            onPress={() => navigation.navigate('LoginPage')}
          />
          <Text style={styles.acc}>Don't have an account yet?</Text>
          <Text style={styles.click}>Click here to sign up</Text>
          <Text style={styles.footer}>© 2020 TheContractor.com.au</Text>
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
  },
  img: {
    alignSelf: 'center',
    margin: 16
  },
  title: {
    fontFamily: platform.fontExtraBold,
    color: platform.brandLight,
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 120,
    marginBottom: 16
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: platform.brandGreen,
  },
  titleText: {
    color: platform.brandLight
  },
  acc: {
    fontSize: 16,
    color: platform.brandLight,
    fontFamily: platform.fontMedium,
    textAlign: 'center',
    paddingTop: 30
  },
  click: {
    fontSize: 16,
    fontFamily: platform.fontBold,
    color: 'green',
    textAlign: 'center',
    paddingTop: 15
  },
  footer: {
    fontFamily: platform.fontMedium,
    fontSize: 12,
    color: platform.brandDarkGrey,
    textAlign: 'center',
    paddingTop: 100
  }
})

export default WelcomeScreen
