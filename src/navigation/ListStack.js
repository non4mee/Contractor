import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ListScreen from '../screens/ListScreen'
import ListDetails from '../screens/ListDetailsScreen'
import { StackStyle } from './themes'

export default function ListStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="ListDetails" component={ListDetails} />
    </Stack.Navigator>
  )
}
