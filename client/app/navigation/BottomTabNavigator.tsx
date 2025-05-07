import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matches from '../screens/Matches';
import Profile from '../screens/Profile';
import Maps from '../screens/Maps';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
