import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import JobOffer from '@/components/matches/JobOffer';

jest.mock('@/components/offerDetails/ShiftDate', () => {
  const React = require('react');
  const { Text } = require('react-native');
  // eslint-disable-next-line react/display-name
  return ({ startDate, endDate }: any) => (
    <Text>{`${startDate} - ${endDate}`}</Text>
  );
});

describe('JobOffer', () => {
  const mockNavigate = jest.fn();

  const mockItem = {
    jobTitle: { name: 'Software Developer' },
    company: { name: 'Tech Corp' },
    wagePerHourInCents: 4500,
    milesToTravel: 12.34,
    shifts: [
      { startDate: '2025-01-01T09:00:00Z', endDate: '2025-01-01T17:00:00Z' },
      { startDate: '2025-01-02T09:00:00Z', endDate: '2025-01-02T17:00:00Z' },
    ],
  };

  const props = {
    item: mockItem,
    navigation: { navigate: mockNavigate },
  };

  it('renders job offer details correctly', () => {
    const { getByText } = render(<JobOffer {...props} />);

    expect(getByText('Software Developer')).toBeTruthy();
    expect(getByText('Tech Corp')).toBeTruthy();
    expect(getByText('Hourly Rate')).toBeTruthy();
    expect(getByText('$ 45.00')).toBeTruthy();
    expect(getByText('Distance')).toBeTruthy();
    expect(getByText('12.34 miles')).toBeTruthy();
    expect(getByText('Shift Dates')).toBeTruthy();

    expect(
      getByText('2025-01-01T09:00:00Z - 2025-01-01T17:00:00Z')
    ).toBeTruthy();
    expect(
      getByText('2025-01-02T09:00:00Z - 2025-01-02T17:00:00Z')
    ).toBeTruthy();
  });

  it('navigates to OfferDetails on button press', () => {
    const { getByText } = render(<JobOffer {...props} />);
    const button = getByText('View Job Details');
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith('OfferDetails', {
      item: mockItem,
    });
  });
});
