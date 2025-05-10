import { View, Button, Text, ScrollView } from 'react-native';
import ShiftDate from '@/components/offerDetails/ShiftDate';

interface JobOfferProps {
  item: any;
  navigation: any;
}

const JobOffer = ({ item, navigation }: JobOfferProps) => {
  const elements = item.shifts.map((item: any, index: number) => {
    return (
      <ShiftDate
        key={index}
        startDate={item.startDate}
        endDate={item.endDate}
        styles="my-[5px]"
      />
    );
  });
  return (
    <View className="mt-[50px] w-[95%] h-[45vh] mb-[10px] bg-[lightgray] p-[10px] rounded-[10px]">
      <View className="h-[20%] border-b-[1px] border-b-primary justify-center">
        <Text className="text-[22px] pl-[10px]">{item.jobTitle.name}</Text>
      </View>
      <View className="h-[25%] border-b-[1px] border-b-primary pl-[10px]">
        <View className="justify-center mt-[5px]">
          <Text className="text-[16px] ssm:text-[18px]">{item.company.name}</Text>
        </View>
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text>Hourly Rate</Text>
            <Text>{`$ ${(item.wagePerHourInCents / 100).toFixed(2)}`}</Text>
          </View>
          <View className="flex-1">
            <Text>Distance</Text>
            <Text>{`${item.milesToTravel.toFixed(2)} miles`}</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 border-b-[1px] border-b-primary mb-[15px] pl-[10px]">
        <Text className="mt-[5px] text-[18px]">Shift Dates</Text>
        <ScrollView style={{ height: 100 }} nestedScrollEnabled={true}>
          {item.shifts && elements}
        </ScrollView>
      </View>
      <Button
        title="View Job Details"
        color={'#31374d'}
        onPress={() => navigation.navigate('OfferDetails', { item })}
      />
    </View>
  );
};

export default JobOffer;
