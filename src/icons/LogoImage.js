import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function LogoImage() {
  return (
    <Image
      source={{ uri: 'logo' }}
      style={styles.image}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 40,
    marginBottom: 16
  }
})
