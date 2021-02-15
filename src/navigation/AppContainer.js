import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage'

import MainStack from './MainStack'
import { signIn } from '../actions/authActions'
import { connect } from 'react-redux'

function AppContainer({ signIn }) {
  const [initialRouteName, setInitialRouteName] = useState('Welcome')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      const userString = await AsyncStorage.getItem('user')
      const userObject = JSON.parse(userString)
      console.log('userObject', userObject)
      if (userObject) {
        signIn(userObject)
        setInitialRouteName('Home')
      }
      SplashScreen.hide()
      setLoading(false)
    } catch (e) {
      console.log('AsyncStorage, error', e)
      SplashScreen.hide()
      setLoading(false)
    }
  }
  if (loading) return null
  return (
    <NavigationContainer>
      <MainStack initialRouteName={initialRouteName} />
    </NavigationContainer>
  )
}

const mapDispatchToProps = {
  signIn
}

export default connect(null, mapDispatchToProps)(AppContainer)
