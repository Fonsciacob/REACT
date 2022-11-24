import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook:{counter}</h1>
      <button onClick={() => increment()}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement()}>-1</button>
    </>
  );
};
