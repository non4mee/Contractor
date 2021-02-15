import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/ProfileScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
