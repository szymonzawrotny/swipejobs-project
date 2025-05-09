import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import ShiftDate from '@/components/matches/ShiftDate';
import { Ionicons } from 'react-native-vector-icons';
import { useUser } from '@/app/context/UserContext';

export default function OfferDetails({ route, navigation }: any) {
  const { item } = route.params;
  const { userData } = useUser();

  const acceptOffer = () => {
    console.log('accept');
  };

  const rejectOffer = () => {
    console.log('reject');
  };

  const elements = item.shifts.map((item: any, index: number) => {
    return (
      <ShiftDate
        key={index}
        startDate={item.startDate}
        endDate={item.endDate}
        styles="my-[0px]"
      />
    );
  });

  return (
    <View className="flex-1 justify-center items-center bg-[lightgray]">
      <View className="bg-primary flex-row h-[50px] items-center justify-between w-full">
        <Text className="text-white ml-[15px]">swipejobs</Text>
        <Text className="text-white mr-[15px]">{`${userData?.firstName} ${userData?.lastName}`}</Text>
      </View>
      <View className="w-[90%] flex-1 rounded-[15px] my-[20px] bg-white">
        <Image
          source={{ uri: item?.jobTitle?.imageUrl }}
          className="w-full h-[160px] rounded-t-[15px]"
          resizeMode="cover"
        />
        <Text className="mt-[5px] ml-[15px] font-bold text-[20px]">
          {item.jobTitle.name}
        </Text>
        <Text className="ml-[15px] text-[16px]">{item.company.name}</Text>
        <View className="bg-[lightgreen] w-full mt-[10px] flex-row justify-between">
          <View className="flex-1 ml-[15px]">
            <Text className="mt-[10px] font-bold">Distance</Text>
            <Text className="mb-[10px] text-[26px] text-white font-bold">{`${item.milesToTravel.toFixed(
              2
            )} miles`}</Text>
          </View>
          <View className="w-[35%] mr-[15px] items-end">
            <Text className="mt-[10px] font-bold">Hourly Rate</Text>
            <Text className="mb-[10px] text-[26px] text-white font-bold">{`$ ${(
              item.wagePerHourInCents / 100
            ).toFixed(2)}`}</Text>
          </View>
        </View>
        <View className="border-b-[1px] border-[lightgray] flex-1 flex-row">
          <View className="w-[20%] justify-center items-center">
            <Ionicons name={'calendar'} size={26} color={'black'} />
          </View>
          <View className="flex-1">
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px]">
              Shift Dates
            </Text>
            <ScrollView style={{ height: 100 }} nestedScrollEnabled={true}>
              {item.shifts && elements}
            </ScrollView>
          </View>
        </View>
        <View className="border-b-[1px] border-[lightgray] flex-1 flex-row">
          <View className="w-[20%] justify-center items-center">
            <Ionicons name={'location'} size={26} color={'black'} />
          </View>
          <View className="flex-1">
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px]">
              Location
            </Text>
            <Text className="ml-[10px] text-[14px]">{`${item.company.address.formattedAddress}`}</Text>
            <Text className="ml-[10px] text-[12px]">{`${item.milesToTravel.toFixed(
              2
            )} miles from your job search location`}</Text>
          </View>
          <View className="justify-center items-center">
            <Pressable
              onPress={() =>
                navigation.navigate('Tabs', {
                  screen: 'Maps',
                })
              }
            >
              <Ionicons name={'chevron-forward'} size={32} color={'black'} />
            </Pressable>
          </View>
        </View>
        <View className="border-b-[1px] border-[lightgray] flex-1 flex-row">
          <View className="w-[20%] justify-center items-center">
            <Ionicons name={'hammer'} size={26} color={'black'} />
          </View>
          <View className="flex-1">
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px]">
              Requirements
            </Text>
            {item.requirements ? (
              <ScrollView>
                {item.requirements.map((item: any) => (
                  <Text className="ml-[10px]" key={item}>
                    {`-${item}`}
                  </Text>
                ))}
              </ScrollView>
            ) : (
              <Text className="ml-[10px]">No requirements needed</Text>
            )}
          </View>
        </View>
        <View className="flex-1 flex-row">
          <View className="w-[20%] justify-center items-center">
            <Ionicons
              name={'person-circle-outline'}
              size={28}
              color={'black'}
            />
          </View>
          <View className="flex-1">
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px]">
              Report to
            </Text>
            <Text className="ml-[10px]">{`${item.company.reportTo.name} ${
              item.company.reportTo.phone ? item.company.reportTo.phone : ''
            }`}</Text>
          </View>
        </View>
        <View className="h-[10%] flex-row justify-center items-center">
          <Pressable
            onPress={rejectOffer}
            className="border-[1px] border-[lightgray] h-[80%] w-[40%] mr-[5px] rounded-[5px] justify-center items-center"
          >
            <Text className="text-[lightgray] text-[18px]">No Thanks</Text>
          </Pressable>
          <Pressable
            onPress={acceptOffer}
            className="border-[1px] border-[lightgray] h-[80%] w-[40%] ml-[5px] rounded-[5px] bg-black justify-center items-center"
          >
            <Text className="text-[lightgray] text-[18px]">
              I&apos;ll Take it
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
