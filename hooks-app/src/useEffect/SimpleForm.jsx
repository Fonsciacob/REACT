import React, { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Fonscia',
    email: 'fonscia_cob1905@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log('useEffect called');
  }, []);

  useEffect(() => {
    //console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    //console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      {username === 'Fonscia' && <Message />}

      <input
        type="email"
        name="email"
        placeholder="cobfonsciareli@gmail.com"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
