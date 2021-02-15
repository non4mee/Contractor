import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function BackIcon() {
  return (
    <Image
      source={{ uri: 'https://png.pngtree.com/png-clipart/20190906/original/pngtree-back-arrow-icon-png-image_4582160.jpg' }}
      style={styles.icon}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 18,
    marginBottom: 16,
    marginLeft: 20
  }
})
