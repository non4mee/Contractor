import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function StarIcon() {
  return (
    <Image
      source={{ uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg' }}
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
