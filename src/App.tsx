import { useState, useEffect } from 'react';

import { getSavedCategory, setSavedCategory } from './App.helpers';
import EditCategories from './components/EditCategories';
import Wheel from './components/Wheel';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState<string[]>([
    'work',
    'relationships',
    'health',
    'personal',
    'hobbies',
    'home',
  ]);
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);
  useEffect(() => getSavedCategory(setSelectedCategory), []);
  useEffect(() => setSavedCategory(selectedCategory), [selectedCategory]);

  return (
    <>
      <Wheel
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <EditCategories categories={categories} setCategories={setCategories} />
    </>
  );
};

export default App;
