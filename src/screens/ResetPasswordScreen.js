import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import platform, { opacify } from '../helpers/platform'
import axios from 'axios'

import Button from '../components/molecules/Button'
import Input from '../components/organisms/Input'
import AdSpace from '../components/molecules/AdSpace'

import { setUser } from '../actions/authActions'
import { connect } from 'react-redux'

function ResetPasswordScreen({ navigation, signIn, userToken, setUser }) {
  return (
    <ScrollView style={styles.block}>
      <Text style={styles.title}>Reset Password</Text>
      <Input placeholder='Email address'/>
      <Button
        styleButton={styles.btn}
        styleText={styles.btnText}
        text='Reset Password'
      />
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
  forgot: {
    fontSize: 14,
    color: platform.brandGreen,
    fontFamily: platform.fontMedium,
    textAlign: 'center'
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
  },
  adSpace: {

  }
})

const mapStateToProps = ({ auth, users }) => {
  return {
    userToken: auth.userToken,
  }
}

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen)
