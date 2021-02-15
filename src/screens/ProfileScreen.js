import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, Button} from 'react-native';
import platform, { opacify } from '../helpers/platform'
import AsyncStorage from '@react-native-community/async-storage'

import SimpleButton from '../components/molecules/SimpleButton'

function ProfileScreen({ navigation }) {
  useLayoutEffect(() => {
  navigation.setOptions({
  })
}, [])

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user')
      console.log('Done.')
      goMain()
    } catch(e) {
      console.log('Error', e)
    }
  }

  const goMain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }]
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.headerText}>My Profile</Text>
        <Image
          style={styles.icon}
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' }}
        />
      </View>
      <View style={styles.border}></View>
      <SimpleButton text='Edit Profile' onPress={() => navigation.navigate('Edit Profile') } />
      <SimpleButton text='Manage Subscription' />
      <SimpleButton text='My Reviews' />
      <SimpleButton text='Logout' onPress={logout}/>
      <View style={styles.adSpace}>
        <Text style={styles.text}>AD SPACE</Text>
      </View>
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
    borderRadius: 24,
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

export default ProfileScreen;
