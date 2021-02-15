import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import platform from '../../helpers/platform'
import Icon from '../../components/Icon'

import GreenButtonSmall from './GreenButtonSmall'

export default function Block({ text, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.generalBlock}>
        <View style={styles.iconBlock}>
          <Image source={{uri: 'https://image.flaticon.com/icons/png/512/147/147144.png'}} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.title}>Joe Bloggs</Text>
          <Text style={styles.subtitle}>Tagline lorem ipsum dolor</Text>
          <Text style={styles.subtitle}>sit amet</Text>
          <View style={styles.starBlock}>
            <Image source={{uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg'}} style={styles.iconStar} resizeMode="contain"/>
            <Image source={{uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg'}} style={styles.iconStar} resizeMode="contain"/>
            <Image source={{uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg'}} style={styles.iconStar} resizeMode="contain"/>
            <Image source={{uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg'}} style={styles.iconStar} resizeMode="contain"/>
            <Image source={{uri: 'https://img.favpng.com/17/21/21/ico-star-icon-png-favpng-Y8AamhTuuNGYtXwir4YSBWdbn.jpg'}} style={styles.iconStar} resizeMode="contain"/>
          </View>
          <Text>19 reviews</Text>
        </View>
      </View>
      <View style={styles.border}></View>
      <Text style={styles.text}>Blocked drains</Text>
      <Text style={styles.text}>Hot water repairs & installations</Text>
      <Text style={styles.text}>General plumbing maintenance</Text>
      <Text style={styles.text}>Toilet, tap & shower repairs</Text>
      <View style={styles.btn}>
        <GreenButtonSmall text='View Profile' />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 377,
    borderWidth: 2,
    borderColor: platform.brandGreen,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  generalBlock: {
    flexDirection: 'row'
  },
  logo: {
    width: 102,
    height: 102,
    marginTop: 28,
    marginLeft: 21
  },
  title: {
    fontFamily: platform.fontExtraBold,
    fontSize: 24
  },
  subtitle: {
    fontFamily: platform.fontMedium,
    fontSize: 13,
    color: platform.brandDark
  },
  iconBlock: {
    paddingRight: 19
  },
  textBlock: {
    paddingTop: 30
  },
  starBlock:{
    flexDirection: 'row'
  },
  iconStar: {
    width: 30,
    height: 30
  },
  border: {
    borderWidth: 1,
    borderColor: platform.brandGrey,
    marginHorizontal: 19,
    marginTop: 15
  },
  text: {
    fontFamily: platform.fontBold,
    paddingLeft: 30,
    paddingTop: 10
  },
  btn: {
    alignItems: 'center',
    paddingTop: 30
  }
})
