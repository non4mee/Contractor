import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import platform from '../../helpers/platform'

export default function AdSpace() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AD SPACE</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 333,
    height: 99,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30
  },
  text: {
    fontFamily: platform.fontExtraBold,
    fontSize: 24,
    textAlign: 'center'
  }

})
