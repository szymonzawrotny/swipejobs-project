import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Matches({ navigation }: any) {
  const mockJobsList = [
    {
      id: 21,
      title: 'job offer',
    },
    {
      id: 37,
      title: 'job offer',
    },
    {
      id: 12,
      title: 'job offer',
    },
  ];

  const elements = mockJobsList.map((item) => {
    return (
      <View className="border-2 border-[red] mt-[50px]" key={item.id}>
        <Button
          title={`job offer: ${item.id}`}
          onPress={() => navigation.navigate('OfferDetails', { id: item.id })}
        />
      </View>
    );
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          {(elements && (elements.length > 0)) ? (
            elements
          ) : (
            <Text>no job offers for you</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
