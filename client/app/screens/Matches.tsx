import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import JobOffer from '@/components/JobOffer';

export default function Matches({ navigation }: any) {
  const mockJobsList = [
    {
      id: 21,
      title: 'Material Handler',
    },
    {
      id: 37,
      title: 'job offer',
    },
    {
      id: 12,
      title: 'job offer',
    },
    {
      id: 1,
      title: 'job offer',
    },
    {
      id: 2,
      title: 'job offer',
    },
    {
      id: 3,
      title: 'job offer',
    },
    {
      id: 4,
      title: 'job offer',
    },
    {
      id: 5,
      title: 'job offer',
    },
    {
      id: 6,
      title: 'job offer',
    },
    {
      id: 7,
      title: 'job offer',
    },
  ];

  const elements = mockJobsList.map((item) => {
    return <JobOffer item={item} navigation={navigation} key={item.id} />;
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="bg-primary h-[50px] items-center justify-center">
          <Text className="text-white">
            swipe
            <Text className="font-bold">jobs</Text>
          </Text>
        </View>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {mockJobsList && elements.length > 0 ? (
            elements
          ) : (
            <Text>no job offers for you</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
