export const getSavedCategory = (
  setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const savedCategory = localStorage.getItem('selectedCategory');
  if (!savedCategory) return;
  const parsed = parseInt(savedCategory);
  if (!Number.isNaN(parsed)) {
    setSelectedCategory(parsed);
  }
};

export const setSavedCategory = (selectedCategory: number | null): void => {
  localStorage.setItem(
    'selectedCategory',
    selectedCategory?.toString() || 'null'
  );
};
