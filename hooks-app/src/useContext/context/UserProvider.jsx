import React, { useState } from 'react';
import { UserContext } from './UserContext';

const user = {
  id: 1,
  name: 'Fonsciareli Cobeñas',
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    //<UserContext.Provider value={{ hola: 'mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
