import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import UserInfo from '@/components/UserInfo';

export default function Profile({ navigation }: any) {
  const [userData, setUserData] = useState<any>(null);

  const details = [
    {
      title: 'Address',
      value: userData?.address?.formattedAddress,
    },
    {
      title: 'Time zone',
      value: userData?.address?.zoneId,
    },
    {
      title: 'Phone number',
      value: userData?.phoneNumber,
    },
    {
      title: 'Worker id',
      value: userData?.workerId,
    },
    {
      title: 'Max job distance',
      value: userData?.maxJobDistance,
    },
  ];

  const fetchData = async () => {
    const response = await fetch(
      'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'
    );

    if (!response.ok) console.log('błąd pobierania danych');

    const user = await response.json();
    setUserData(user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const elements = details.map((item) => {
    return <UserInfo title={item.title} value={item.value} key={item.title} />;
  });
  return (
    <>
      {userData ? (
        <View className="flex-1">
          <View className="bg-primary h-[50px] items-center justify-center">
            <Text className="text-white">
              swipe
              <Text className="font-bold">jobs</Text>
            </Text>
          </View>
          <View className="flex-1">
            <View className="bg-[lightgray] h-[25%] rounded-bl-[15px] rounded-br-[15px]"></View>
            <View className="bg-[lightblue] h-[120px] w-[120px] relative left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]"></View>
            <View className="relative top-[-35px]">
              <Text className="text-center text-[26px]">{`${userData.firstName} ${userData.lastName}`}</Text>
            </View>
            <View className="relative top-[-35px]">
              <Text className="text-center text-[18px]">{`${userData.email}`}</Text>
            </View>
            <ScrollView className="flex-1">
              {details && elements}
            </ScrollView>
          </View>
        </View>
      ) : (
        <Text>loading...</Text>
      )}
    </>
  );
}
