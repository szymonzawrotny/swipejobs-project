import { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import JobOffer from '@/components/matches/JobOffer';
import { JobMatchInterace } from '@/constants/JobMatchInterface';
import { fetchJobMatches } from '@/services/matchesService';

export default function Matches({ navigation }: any) {
  const [jobsList, setJobsList] = useState<JobMatchInterace[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobMatches();
      setJobsList(data);
    };
    fetchData();
  }, []);

  const elements = jobsList.map((item: JobMatchInterace) => {
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
