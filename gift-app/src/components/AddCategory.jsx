import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [data, setData] = useState('');

  const onInputCategory = ({ target }) => {
    setData(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (data.trim().length <= 1) return;

    onNewCategory(data.trim());
    setData('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={data} onChange={onInputCategory}></input>
    </form>
  );
};
