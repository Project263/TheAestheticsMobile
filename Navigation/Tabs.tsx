import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/Home';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

export const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Tab.Screen name="Главная" component={Home} />
      <Tab.Screen name="Настройки" component={Settings} />
    </Tab.Navigator>
  );
};
