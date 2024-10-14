import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
  userId: number | null;
  setUserId: (id: number) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
