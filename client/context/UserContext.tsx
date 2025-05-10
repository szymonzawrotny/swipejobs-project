import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  address: {
    formattedAddress: string;
    zoneId: string;
  };
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
}

interface UserContextProps {
  userData: User | null;
  fetchUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'
      );
      if (!response.ok) {
        console.error('Błąd pobierania danych');
        return;
      }

      const user = await response.json();
      setUserData(user);
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
