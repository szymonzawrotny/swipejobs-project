import { View, Text } from 'react-native';
import React from 'react';

interface ShiftDateProps {
  startDate: string;
  endDate: string;
  styles: string;
}

const ShiftDate = ({ startDate, endDate, styles }: ShiftDateProps) => {
  const formattedStartDate = new Date(startDate).toLocaleString('pl-PL');
  const formattedEndDate = new Date(endDate).toLocaleString('pl-PL');
  return (
    <View className={`bg-white my-[5px] rounded-[5px] ${styles}`}>
      <Text
        className={`py-[5px] text-center ${styles ? 'py-[0px]' : 'py-[5px]'}`}
      >{`${formattedStartDate} - ${formattedEndDate}`}</Text>
    </View>
  );
};

export default ShiftDate;
