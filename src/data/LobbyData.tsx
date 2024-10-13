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
  addLobby: (name: string, maxPlayers: number, place: string, timeout: number) => void;
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

  const addLobby = (name: string, maxPlayers: number, place: string, timeout: number) => {
    const newLobby: LobbyDetail = {
      id: Date.now(),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDDfM_jPYcSyjhRjCb4bpdR3e1gKbw312bA&s",
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

  return (
    <LobbyContext.Provider value={{ lobbies, addLobby, joinLobby, setLobbies }}>
      {children}
    </LobbyContext.Provider>
  );
};
