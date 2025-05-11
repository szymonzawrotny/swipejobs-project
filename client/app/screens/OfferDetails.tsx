import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import ShiftDate from '@/components/offerDetails/ShiftDate';
import { Ionicons } from 'react-native-vector-icons';
import { useUser } from '@/context/UserContext';
import { ShiftDateInterface } from '@/constants/ShiftDateInterface';
import JobActionFeedback from '@/components/offerDetails/JobActionFeedback';

interface OfferDetailsProps {
  route: any;
  navigation: any;
}

export default function OfferDetails({ route, navigation }: OfferDetailsProps) {
  const { item } = route.params;
  const { userData } = useUser();

  const action = async (
    setMessage: (message: string) => void,
    type: string
  ) => {
    try {
      const response = await fetch(
        `https://test.swipejobs.com/api/worker/${userData?.workerId}/job/${item?.jobId}/${type}`
      );
      if (!response.ok) {
        console.error('Data download error');
        return;
      }

      const message = await response.json();

      if (message.success) {
        setMessage(`successfully performed the operation: ${type}`);
      } else {
        setMessage(`Failed to perform the operation: ${type}`);
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  const elements = item.shifts.map(
    (item: ShiftDateInterface, index: number) => {
      return (
        <ShiftDate
          key={index}
          startDate={item.startDate}
          endDate={item.endDate}
          styles="my-[0px]"
        />
      );
    }
  );

  return (
    <View className="flex-1 justify-center items-center bg-[lightgray]">
      <View className="bg-primary flex-row h-[50px] items-center justify-between w-full">
        <Text className="text-white ml-[15px]">
          swipe
          <Text className="font-bold">jobs</Text>
        </Text>
        <Text className="text-white mr-[15px]">{`${userData?.firstName} ${userData?.lastName}`}</Text>
      </View>
      <View className="w-[90%] flex-1 rounded-[15px] my-[20px] bg-white">
        <Image
          source={{ uri: item?.jobTitle?.imageUrl }}
          className="w-full h-[20vh] max-h-[160px] rounded-t-[15px]"
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
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px] text-[10px] ssm:text-[14px]">
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
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px] text-[10px] ssm:text-[14px]">
              Location
            </Text>
            <Text className="ml-[10px] text-[10px] ssm:text-[14px]">{`${item.company.address.formattedAddress}`}</Text>
            <Text className="ml-[10px] text-[8px] ssm:text-[12px]">{`${item.milesToTravel.toFixed(
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
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px] text-[10px] ssm:text-[14px]">
              Requirements
            </Text>
            {item.requirements ? (
              <ScrollView>
                {item.requirements.map((item: string[], index: number) => (
                  <Text
                    className="ml-[10px] text-[10px] ssm:text-[14px]"
                    key={index}
                  >
                    {`-${item}`}
                  </Text>
                ))}
              </ScrollView>
            ) : (
              <Text className="ml-[10px] text-[10px] ssm:text-[14px]">
                No requirements needed
              </Text>
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
            <Text className="font-bold ml-[10px] mt-[5px] mb-[0px] text-[10px] ssm:text-[14px]">
              Report to
            </Text>
            <Text className="ml-[10px] text-[10px] ssm:text-[14px]">{`${
              item.company.reportTo.name
            } ${
              item.company.reportTo.phone ? item.company.reportTo.phone : ''
            }`}</Text>
          </View>
        </View>
        <View className="h-[10%] flex-row justify-center items-center">
          <JobActionFeedback
            text="No Thanks"
            styles={''}
            action={action}
            type={'reject'}
            navigation={navigation}
          />
          <JobActionFeedback
            text="I'll Take it"
            styles={'bg-black'}
            action={action}
            type={'accept'}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
}
