import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 1, name: 'Fonsciareli Cobeñas' })}
      >
        Establecer Usuario
      </button>
    </>
  );
};
