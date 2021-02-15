import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import platform from '../../helpers/platform'

export default function ChatItem({ title, icon, onPress, date, source }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBlock}>
        <Image style={styles.image} source={source}/>
      </View>
      <View style={styles.textBlock}>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date} numberOfLines={2}>{date}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: platform.brandGrey,
    borderBottomColor: platform.brandGrey,
    marginHorizontal: 19,
    alignItems: 'center'
  },
  title: {
    fontFamily: platform.fontExtraBold,
    fontSize: 16,
  },
  date: {
    fontSize: 13,
    color: platform.brandDarkGrey
  },
  image: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    borderRadius: 25,
    marginRight: 16
  }
})
