import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchStack from './SearchStack'
import NotificationChatStack from './NotificationChatStack'
import ProfileStack from './ProfileStack'
import ListStack from './ListStack'
import { TabsStyle } from './themes'
import TabIcon from '../components/icons/TabIcon'
import Icon from '../components/Icon'

const Tab = createBottomTabNavigator();

function TabsStack() {
  return (
    <Tab.Navigator tabBarOptions={TabsStyle} initialRouteName="Search">
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{ tabBarIcon: () => <Icon name="search-icon" /> }}
      />
      <Tab.Screen
        name="NotificationChat"
        component={NotificationChatStack}
        options={{ tabBarIcon: () => <Icon name="search-icon" /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ tabBarIcon: () => <Icon name="search-icon" /> }}
      />
      <Tab.Screen
        name="List"
        component={ListStack}
        options={{ tabBarIcon: () => <Icon name="search-icon" /> }}
      />
    </Tab.Navigator>
  );
}

export default TabsStack;
