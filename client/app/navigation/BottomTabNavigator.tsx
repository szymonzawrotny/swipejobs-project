import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matches from '@/app/screens/Matches'
import Profile from '@/app/screens/Profile';
import Maps from '@/app/screens/Maps';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#31374d' },
        tabBarShowLabel: false,
        tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
        tabBarIconStyle: { marginTop: 2 },
      }}
    >
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
                color={focused ? 'dodgerblue' : 'lightgray'}
              />
              {focused && (
                <View className="bg-[dodgerblue] absolute w-[200%] h-[3px] bottom-[-8px] rounded-[2px]" />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? 'map' : 'map-outline'}
                size={size}
                color={focused ? 'dodgerblue' : 'lightgray'}
              />
              {focused && (
                <View className="bg-[dodgerblue] absolute w-[200%] h-[3px] bottom-[-8px] rounded-[2px]" />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={focused ? 'dodgerblue' : 'lightgray'}
              />
              {focused && (
                <View className="bg-[dodgerblue] absolute w-[200%] h-[3px] bottom-[-8px] rounded-[2px]" />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
