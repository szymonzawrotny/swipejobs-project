import React from 'react';
import { render } from '@testing-library/react-native';
import UserInfo from '@/components/profile/UserInfo';

describe('UserInfo', () => {
  it('renders title and value correctly', () => {
    const { getByText } = render(<UserInfo title="Email" value="user@example.com" />);
    
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('user@example.com')).toBeTruthy();
  });

  it('renders numeric value correctly', () => {
    const { getByText } = render(<UserInfo title="Age" value={30} />);

    expect(getByText('30')).toBeTruthy();
  });

  it('renders undefined value as blank', () => {
    const { getByText } = render(<UserInfo title="Phone" value={undefined} />);

    expect(getByText('Phone')).toBeTruthy();
    expect(getByText('')).toBeTruthy();
  });
});