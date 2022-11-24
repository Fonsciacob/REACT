import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const SimpleFormCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

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
      <div className="p-3">
        <h1>Simple Form</h1>
        <hr />
        <form className="space-y-6" onSubmit={onResetForm}>
          <div className="container flex flex-wrap mt-4">
            <input
              className="p-2 mt-1 border border-slate-300 focus:outline-none rounded-md w-full"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onInputChange}
            />

            <input
              className="p-2 mt-1 border border-slate-300 focus:outline-none rounded-md w-full"
              type="email"
              name="email"
              placeholder="cobfonsciareli@gmail.com"
              value={email}
              onChange={onInputChange}
            />

            <input
              className="p-2 mt-1 border border-slate-300 focus:outline-none rounded-md w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="mt-2 bg-blue-600 px-4 py-1 rounded-md text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
