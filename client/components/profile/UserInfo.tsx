import { View, Text } from 'react-native';
import React from 'react';

interface UserInfoProps {
  title: string;
  value: string | number | undefined;
}

const UserInfo = ({ title, value }: UserInfoProps) => {
  return (
    <View className="p-[15px] my-[5px] bg-[lightgray] rounded-[15px] w-[95%]">
      <Text className="text-[18px] mb-[10px]">{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default UserInfo;
