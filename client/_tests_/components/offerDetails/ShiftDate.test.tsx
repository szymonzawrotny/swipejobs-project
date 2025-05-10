import React from 'react';
import { render } from '@testing-library/react-native';
import ShiftDate from '@/components/offerDetails/ShiftDate';

describe('ShiftDate', () => {
  it('renders formatted start and end dates correctly', () => {
    const startDate = '2025-05-10T14:00:00Z';
    const endDate = '2025-05-10T18:00:00Z';

    const { getByText } = render(
      <ShiftDate startDate={startDate} endDate={endDate} styles="p-2" />
    );

    const expectedTextRegex =
      /\w{3} \d{2}, \d{4}, \d{2}:\d{2} [AP]M - \w{3} \d{2}, \d{4}, \d{2}:\d{2} [AP]M/;

    expect(getByText(expectedTextRegex)).toBeTruthy();
  });
});
