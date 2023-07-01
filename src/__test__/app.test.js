import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Components/Card';
import { ContextProvider } from '../Components/utils/global.context';

test('renders Card component', () => {
  const mockData = [
    { id: 1, name: 'Leanne Graham', username: 'Bret' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette' },
  ];

  const { getByText } = render(
    <ContextProvider>
      <Card data={mockData} />
    </ContextProvider>
  );

  const dentistName1 = getByText(/Leanne Graham/i);
  const dentistName2 = getByText(/Ervin Howell/i);

  expect(dentistName1).toBeInTheDocument();
  expect(dentistName2).toBeInTheDocument();
});
