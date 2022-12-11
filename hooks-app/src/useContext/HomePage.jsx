import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <small>{user?.name}</small>
    </>
  );
};
