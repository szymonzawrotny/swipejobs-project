import { View, Text } from 'react-native';
import React from 'react';

interface ShiftDateProps {
  startDate: string;
  endDate: string;
  styles: string;
}

const ShiftDate = ({ startDate, endDate, styles }: ShiftDateProps) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <View className={`bg-white rounded-[5px] ${styles}`}>
      <Text
        className={`text-center text-[8px] ssm:text-[12px] ${styles}`}
      >{`${formatDate(startDate)} - ${formatDate(endDate)}`}</Text>
    </View>
  );
};

export default ShiftDate;
