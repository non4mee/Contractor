import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

function TabsStack() {
  return (
    <Tab.Navigator tabBarOptions={TabsStyle} initialRouteName="Search">
      <Tab.Screen name="Search" component={SearchStack} />
    </Tab.Navigator>
  );
}

export default TabsStack;
