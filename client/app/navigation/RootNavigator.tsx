import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '@/app/navigation/BottomTabNavigator';
import OfferDetails from '@/app/screens/OfferDetails';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OfferDetails"
        component={OfferDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
