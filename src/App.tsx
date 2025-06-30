import { useState } from 'react';

import EditCategories from './components/EditCategories';
import Wheel from './components/Wheel';
import * as Styled from './App.styles';

export interface Data {
  categories: { name: string; value: number; subcategories: string[] }[];
  selectedCategory: number | null;
  clickedCategory: number | null;
}

const initialCategories = [
  'work',
  'relationships',
  'health',
  'personal',
  'hobbies',
  'home',
].map((category) => ({
  name: category,
  value: 1,
  subcategories: [],
}));

const App = () => {
  const [data, setData] = useState<Data>({
    categories: initialCategories,
    selectedCategory: null,
    clickedCategory: null,
  });

  return (
    <Styled.Container>
      <h1>Wheel of Life</h1>
      <Styled.Content>
        <Wheel data={data} setData={setData} />
        <EditCategories data={data} setData={setData} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default App;
