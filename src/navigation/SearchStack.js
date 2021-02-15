import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from '../screens/SearchScreen'
import ResearchScreen from '../screens/ResearchScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen name="Research" component={ResearchScreen}/>
    </Stack.Navigator>
  );
}

export default SearchStack;
