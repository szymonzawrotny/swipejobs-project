import React from 'react';
import { View, Text } from 'react-native';

export default function OfferDetails({ route }: any) {
  const { id } = route.params;
  return (
    <View>
      <Text>offer ID: {id}</Text>
    </View>
  );
}
