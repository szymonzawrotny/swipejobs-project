import { View, Text } from 'react-native';
import React from 'react';

interface ShiftDateProps {
  startDate: string;
  endDate: string;
  styles: string;
}

const ShiftDate = ({ startDate, endDate, styles }: ShiftDateProps) => {
  const formattedStartDate = new Date(startDate).toLocaleString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedEndDate = new Date(startDate).toLocaleString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <View className={`bg-white rounded-[5px] ${styles}`}>
      <Text
        className={`text-center ${styles}`}
      >{`${formattedStartDate} - ${formattedEndDate}`}</Text>
    </View>
  );
};

export default ShiftDate;
