import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import platform from '../../helpers/platform'

export default function ListButton({ text, onPress, subtitle, image }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.block}>
        <View style={styles.imageBlock}>
          <Image style={styles.image} source={image}/>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {

  },
  block: {
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 35,
    marginTop: 10
  },
  text: {
    fontFamily: platform.fontExtraBold,

  },
  subtitle: {
    fontFamily: platform.fontMedium,
    color: platform.brandDark,
    fontSize: 13,
    paddingTop: 5
  },
  textBlock: {
    paddingLeft: 10,
    paddingTop: 10
  }

})
