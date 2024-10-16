import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LobbyDetail {
    //ส่วนทำงานจากเครื่อง
  id: number;
  image: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;
  timeout: number;

    //ส่วนผู้ใช้ input
  place: string;
}

interface LobbyContextProps {
  lobbies: LobbyDetail[];
  addLobby: (name: string, maxPlayers: number, image: string, place: string, timeout: number) => void;
  joinLobby: (id: number) => void;
  setLobbies: React.Dispatch<React.SetStateAction<LobbyDetail[]>>;
  leaveLobby: (id: number) => void;
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

  const addLobby = (name: string, maxPlayers: number, image: string, place: string, timeout: number) => {
    const newLobby: LobbyDetail = {
      id: Date.now(),
      image,
      name,
      maxPlayers,
      currentPlayers: 1,
      timeout: Date.now() + (timeout * 60000), // 1 minute timeout
      place,
    };
    setLobbies(prevLobbies => [...prevLobbies, newLobby]);
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

  const leaveLobby = (id: number) => {
    setLobbies(prevLobbies =>
      prevLobbies.map(lobby =>
        lobby.id === id && lobby.currentPlayers > 0
          ? { ...lobby, currentPlayers: lobby.currentPlayers - 1 }
          : lobby
      )
    );
  };

  return (
    <LobbyContext.Provider value={{ lobbies, addLobby, joinLobby, setLobbies, leaveLobby }}>
      {children}
    </LobbyContext.Provider>
  );
};
