import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginPageScreen from '../screens/LoginPageScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import { StackStyle } from './themes'
import TabsStack from './TabsStack'

const Stack = createStackNavigator();

export default function MainStack({ initialRouteName }) {
  return (
    <Stack.Navigator screenOptions={StackStyle} initialRouteName={initialRouteName}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginPage" component={LoginPageScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen
        name="Home"
        component={TabsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
