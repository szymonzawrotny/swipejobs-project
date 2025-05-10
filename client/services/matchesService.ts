export const fetchJobMatches = async () => {
  const response = await fetch(
    'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches'
  );

  if (!response.ok) {
    console.log('Błąd pobierania danych');
    return [];
  }

  const list = await response.json();
  return list;
};
