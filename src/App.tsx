import { useState, useEffect } from 'react';

import { getSavedCategory, setSavedCategory } from './App.helpers';
import EditCategories from './components/EditCategories';
import Wheel from './components/Wheel';
import * as Styled from './App.styles';

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
    <Styled.Container>
      <h1>Wheel of Life</h1>
      <Styled.Content>
        <Wheel
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <EditCategories categories={categories} setCategories={setCategories} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default App;
