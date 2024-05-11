import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface UserInfo {
  // Define la estructura de la información del usuario
  // Aquí puedes agregar propiedades específicas del usuario
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

// Asegúrate de definir un valor por defecto que coincida con la forma de UserContextType
const defaultValue: UserContextType = {
  userInfo: {},
  setUserInfo: () => {} // Valor por defecto de la función setter
};

export const UserContext = createContext<UserContextType>(defaultValue);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps): JSX.Element {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
