import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon} from 'icons/HomeIcon';
import {DumbellIcon} from 'icons/DumbellIcon';
import {LibIcon} from 'icons/LibIcon';
import {ShopIcon} from 'icons/ShopIcon';
import {SettingsIcon} from 'icons/SettingsIcon';
import {
  ShopScreen,
  SettingsScreen,
  LibScreen,
  ExercisesScreen,
  HomeScreen,
} from 'screens';
import {NavigationTabBar} from './NavigationTabBar';

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator
      tabBar={props => <NavigationTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: () => <HomeIcon />,
        }}
        name="Главная"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <DumbellIcon />,
        }}
        name="Упражнения"
        component={ExercisesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <LibIcon />,
        }}
        name="Библиотека"
        component={LibScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <ShopIcon />,
        }}
        name="Магазин"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SettingsIcon />,
        }}
        name="Настройки"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
