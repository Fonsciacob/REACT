import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory]);
  };

  return (
    <div className="container-fluid">
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
