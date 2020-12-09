import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function NewsStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}

export default NewsStack;
