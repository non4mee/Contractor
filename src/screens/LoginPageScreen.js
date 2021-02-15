import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import platform, { opacify } from '../helpers/platform'
import axios from 'axios'

import Button from '../components/molecules/Button'
import Input from '../components/organisms/Input'
import AdSpace from '../components/molecules/AdSpace'
import Picker from '../components/molecules/Picker'


import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'

function LoginPageScreen({ navigation, signIn, onPress, tokens }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goMain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
  }

  const saveUser = async (user) => {
    try {
      const res = await AsyncStorage.setItem('user', JSON.stringify(user))
      console.log('AsyncStorage response', res)
    } catch (error) {
      console.log('AsyncStorage error', error)
    }
  }

  const handleLogin = () => {
    axios({
      url: 'http://phplaravel-466997-1463969.cloudwaysapps.com/api/auth/login',
      method: 'post',
      data: { email, password },
    })
    .then(res => {
      console.log(res)
      signIn(res.data)
      saveUser(res.data)
      goMain()
    })
    .catch(err => console.log(err?.response))
  }

  return (
    <ScrollView style={styles.block}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder='Email'
        _value={email}
        _onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder='Password'
        _value={password}
        _onChangeText={text => setPassword(text)}
      />
      <Button
        styleButton={styles.btn}
        styleText={styles.btnText}
        text='Login'
        onPress={handleLogin}
      />
      <Picker
        styleButton={styles.pickerForgot}
        styleText={styles.textForgot}
        text='Forgot Password?'
        onPress={() => navigation.navigate('ResetPassword')}
      />
      <View style={styles.orBlock}>
        <Text style={styles.or}>OR</Text>
      </View>
      <Button
        text='Login with Facebook'
        styleButton={styles.facebook}
        styleText={styles.textFacebook}
      />
      <Button
        styleButton={styles.google}
        styleText={styles.textGoogle}
        text='Login with Google'
      />
      <Text style={styles.acc}>Don't have an account yet?</Text>
      <Text style={styles.click}>Click here to sign up</Text>
      <AdSpace style={styles.adSpace}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: platform.fontExtraBold,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 20,
    color: '#000'
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: platform.brandGreen,
    marginBottom: 14
  },
  btnText: {
    color: '#fff'
  },
  pickerForgot: {
    fontSize: 14,
    color: platform.brandGreen,
    fontFamily: platform.fontMedium,
  },
  textForgot: {
    textAlign: 'center',
    fontFamily: platform.fontMedium,
    color: platform.brandGreen
  },
  or: {
    fontSize: 20,
    fontFamily: platform.fontExtraBold,
    textAlign: 'center',
    paddingTop: 15,
    color: '#000',
    marginBottom: 20
  },
  orBlock: {
    lineHeight: 1,
  },
  facebook: {
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#2d3183',
    justifyContent: 'center',

  },
  google: {
    alignSelf: 'center'

  },
  textFacebook: {
    color: '#fff'
  },
  textGoogle: {
    color: 'grey'
  },
  acc: {
    fontSize: 16,
    color: 'grey',
    fontFamily: platform.fontMedium,
    textAlign: 'center',
    paddingTop: 30
  },
  click: {
    fontSize: 16,
    fontFamily: platform.fontBold,
    color: 'green',
    textAlign: 'center',
    paddingTop: 15,
    marginBottom: 33
  }
})

const mapStateToProps = (state) => {
  return {
    tokens: state.tokens
  }
}

const mapDispatchToProps = {
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageScreen)
