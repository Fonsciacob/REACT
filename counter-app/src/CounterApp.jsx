import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { App } from './FirstApp';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const add = () => {
    setCounter((c) => c + 1);
  };

  const reset = () => {
    setCounter(value);
  };

  const substract = () => {
    setCounter((c) => c - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={substract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
