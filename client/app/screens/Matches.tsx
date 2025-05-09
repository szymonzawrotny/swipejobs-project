import { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import JobOffer from '@/components/matches/JobOffer';

export default function Matches({ navigation }: any) {
  const [jobsList, setJobsList] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches'
    );

    if (!response.ok) console.log('błąd pobierania danych');

    const list = await response.json();
    setJobsList(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const elements = jobsList.map((item: any) => {
    return <JobOffer item={item} navigation={navigation} key={item?.jobId} />;
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
          {jobsList && elements.length > 0 ? (
            elements
          ) : (
            <Text>no job offers for you</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
