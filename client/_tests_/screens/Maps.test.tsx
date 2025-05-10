import React from 'react';
import { render } from '@testing-library/react-native';
import Maps from '@/app/screens/Maps';

jest.mock('@/components/map/MapElement', () => {
  // eslint-disable-next-line react/display-name
  return ({ data }: { data: any[] }) => {
    const { Text, View } = require('react-native');
    return (
      <View>
        <Text>Mocked MapElement</Text>
        <Text>{`Points: ${data.length}`}</Text>
      </View>
    );
  };
});

describe('Maps', () => {
  it('renders header title correctly', () => {
    const { getByText } = render(<Maps />);
    expect(getByText('Preferred Work Location')).toBeTruthy();
  });

  it('passes correct data to MapElement', () => {
    const { getByText } = render(<Maps />);
    expect(getByText('Mocked MapElement')).toBeTruthy();
    expect(getByText('Points: 2')).toBeTruthy();
  });
});
