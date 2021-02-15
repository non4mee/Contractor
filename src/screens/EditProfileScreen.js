import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, Button} from 'react-native';
import platform, { opacify } from '../helpers/platform'

import SimpleButton from '../components/molecules/SimpleButton'

function Profile({ navigation }) {
  useLayoutEffect(() => {
  navigation.setOptions({
  })
}, [])
  return (
    <ScrollView style={styles.container}>

    </ScrollView>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 36,
    fontFamily: platform.fontExtraBold,
    paddingLeft: 20,
    paddingTop: 16
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginRight: 15,
    marginTop: 15
  },
  border: {
    borderWidth: 1,
    borderColor: platform.brandGrey,
    marginHorizontal: 19,
    marginTop: 15
  },
  iconStar: {
    width: 20,
    height: 20
  },
  adSpace: {
    width: 333,
    height: 99,
    backgroundColor: platform.brandGrey,
    marginTop: 200,
    marginHorizontal: 13,
    justifyContent: 'center'
  },
  text: {
    fontSize: 36,
    fontFamily: platform.fontExtraBold,
    paddingLeft: 20,
    paddingTop: 16,
    textAlign: 'center',
  }

})

export default Profile;
