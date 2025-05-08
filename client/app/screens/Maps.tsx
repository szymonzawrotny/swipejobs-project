import React from 'react';
import { View, Text } from 'react-native';

export default function Maps({ navigation }: any) {
  return (
    <View>
      <View className="bg-primary h-[50px] items-center justify-center">
        <Text className="text-white">
          Preffered Work Location
        </Text>
      </View>
      <Text>maps</Text>
    </View>
  );
}
