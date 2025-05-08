import { View, Button, Text } from 'react-native';
import React from 'react';

interface JobOfferProps {
  item: {
    id: number;
    title: string;
  };
  navigation: any;
}

const JobOffer = ({ item, navigation }: JobOfferProps) => {
  return (
    <View className="mt-[50px] w-[95%] h-[40vh] mb-[25px] bg-[lightgray] p-[10px] rounded-[10px]">
      <View className="h-[20%] border-b-[1px] border-b-primary justify-center">
        <Text className="text-[22px] pl-[10px]">{item.title}</Text>
      </View>
      <View className="flex-1 border-b-[1px] border-b-primary pl-[10px]">
        <View className="justify-center mt-[5px]">
          <Text className="text-[18px]">Quality Shopping</Text>
        </View>
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text>Hourly Rate</Text>
            <Text>$18.50</Text>
          </View>
          <View className="flex-1">
            <Text>Distance</Text>
            <Text>0.3 miles</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 border-b-[1px] border-b-primary mb-[15px] pl-[10px]">
        <Text className="mt-[5px] text-[18px]">Shift Dates</Text>
        <Text>...</Text>
        <Text>...</Text>
      </View>
      <Button
        title="View Job Details"
        color={'#31374d'}
        onPress={() => navigation.navigate('OfferDetails', { id: item.id })}
      />
    </View>
  );
};

export default JobOffer;
