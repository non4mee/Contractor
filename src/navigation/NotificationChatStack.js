import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationScreen from '../screens/NotificationScreen'
import NotificationChatScreen from '../screens/NotificationChatScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function NotificationChatStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="NotificationChat" component={NotificationChatScreen}/>
      <Stack.Screen name="Notification" component={NotificationScreen}/>
    </Stack.Navigator>
  )
}
