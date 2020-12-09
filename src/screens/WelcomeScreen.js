import React, { useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native'

const WelcomeImage = require('../img/welcome.png')

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={WelcomeImage} style={styles.container}>
      <View style={styles.block}>
        <Image source={{uri: 'logo'}}style={styles.logo} resizeMode="contain" />
          <View style={styles.center}>
            <Text style={styles.title}>find trust worthy</Text>
            <TouchableOpacity style={styles.button} onPress={}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>dont have account</Text>
            <Text style={styles.textGreen} onPress={}>
            </Text>
          </View>
        <Text style={styles.footer}>brand copy</Text>
      </View>
    </ImageBackground>
  )
}
