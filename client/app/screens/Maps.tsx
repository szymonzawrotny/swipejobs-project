import { View, Text } from 'react-native';
import MapElement from '@/components/MapElement';

export default function Maps() {
  const mockData = [
    {
      latitude: 41.889167453082464,
      longitude: -87.6310267653401,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      title: 'Construction General Helper',
      desc: '430 Smith St, Chicago, IL 60654, USA',
    },
    {
      latitude: 42.033927702399126,
      longitude: -87.67214378758149,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      title: 'Driver',
      desc: '123 Main Street, Chicago, IL 60654',
    },
  ];

  return (
    <View className="flex-1">
      <View className="bg-primary h-[50px] items-center justify-center">
        <Text className="text-white">Preferred Work Location</Text>
      </View>
      <View className="flex-1">
        <MapElement data={mockData} />
      </View>
    </View>
  );
}
