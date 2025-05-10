import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from '@/app/screens/Profile';
import { useUser } from '@/app/context/UserContext';

jest.mock('@/components/profile/UserInfo', () => {
  // eslint-disable-next-line react/display-name
  return ({ title, value }: { title: string; value: string }) => {
    const { Text } = require('react-native');
    return <Text>{`${title}: ${value}`}</Text>;
  };
});

jest.mock('@/app/context/UserContext');

const mockedUseUser = useUser as jest.Mock;

describe('Profile', () => {
  it('renders loading state when userData is not available', () => {
    mockedUseUser.mockReturnValue({ userData: null });

    const { getByText } = render(<Profile />);
    expect(getByText('loading...')).toBeTruthy();
  });

  it('renders user profile with name and email', () => {
    mockedUseUser.mockReturnValue({
      userData: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        address: {
          formattedAddress: '123 Main St',
          zoneId: 'UTC+1',
        },
        phoneNumber: '123456789',
        workerId: 'W123',
        maxJobDistance: 50,
      },
    });

    const { getByText } = render(<Profile />);

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('john@example.com')).toBeTruthy();
    expect(getByText('Address: 123 Main St')).toBeTruthy();
    expect(getByText('Time zone: UTC+1')).toBeTruthy();
    expect(getByText('Phone number: 123456789')).toBeTruthy();
    expect(getByText('Worker id: W123')).toBeTruthy();
    expect(getByText('Max job distance: 50')).toBeTruthy();
  });
});
