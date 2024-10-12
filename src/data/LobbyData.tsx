import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LobbyDetail {
  id: number;
  image: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;
  timeout: number;
}

interface LobbyContextProps {
  lobbies: LobbyDetail[];
  addLobby: (name: string, maxPlayers: number) => void;
  joinLobby: (id: number) => void;
  setLobbies: React.Dispatch<React.SetStateAction<LobbyDetail[]>>;
}

const LobbyContext = createContext<LobbyContextProps | undefined>(undefined);

export const useLobby = () => {
  const context = useContext(LobbyContext);
  if (!context) {
    throw new Error('useLobby must be used within a LobbyProvider');
  }
  return context;
};

export const LobbyProvider = ({ children }: { children: ReactNode }) => {
  const [lobbies, setLobbies] = useState<LobbyDetail[]>([]);

  const addLobby = (name: string, maxPlayers: number) => {
    const newLobby: LobbyDetail = {
      id: Date.now(),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7TwVJ0OAzfQ4CevUpqgP1b8TcEyINZwySA&s",
      name: "BoardGame Gu Yaik Tai",
      maxPlayers: 8,
      currentPlayers: 1,
      timeout: Date.now() + ( 1 * 60000 ), // 1 minute timeout
    };
    setLobbies([...lobbies, newLobby]);
  };

  const joinLobby = (id: number) => {
    setLobbies(prevLobbies =>
      prevLobbies.map(lobby =>
        lobby.id === id && lobby.currentPlayers < lobby.maxPlayers
          ? { ...lobby, currentPlayers: lobby.currentPlayers + 1 }
          : lobby
      )
    );
  };

  return (
    <LobbyContext.Provider value={{ lobbies, addLobby, joinLobby, setLobbies }}>
      {children}
    </LobbyContext.Provider>
  );
};
