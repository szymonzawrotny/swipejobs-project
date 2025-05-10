import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

interface ObjectProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  title: string;
  desc: string;
}

interface MapElementProps {
  data: ObjectProps[];
}

const MapElement = ({ data }: MapElementProps) => {

  const elements = data.map((item, index) => {
    return (
      <Marker
        coordinate={{
          latitude: item.latitude,
          longitude: item.longitude,
        }}
        title={item.title}
        description={item.desc}
        key={index}
      />
    );
  });

  return (
    <View className="flex-1">
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={data[0]}
      >
        {data && elements}
      </MapView>
    </View>
  );
};

export default MapElement;
