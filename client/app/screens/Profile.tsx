import React from 'react';
import { View, Text } from 'react-native';

export default function Profile({ navigation }: any) {
  return (
    <View>
      <View className="bg-primary h-[50px] items-center justify-center">
        <Text className="text-white">
          swipe
          <Text className="font-bold">jobs</Text>
        </Text>
      </View>
      <Text>Your profile</Text>
    </View>
  );
}
