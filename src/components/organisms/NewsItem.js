import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, Button} from 'react-native';
import platform, { opacify } from '../../helpers/platform'

function NewsItem({ onPress, title, date, source }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.image}>
        <Image source={source} style={styles.image}/>
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={3}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 15
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBlock: {
    flex: 1
  },
  title: {
    fontFamily: platform.fontExtraBold,

  },

})

export default NewsItem;
