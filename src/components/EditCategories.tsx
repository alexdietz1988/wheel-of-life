interface EditCategoriesProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const EditCategories = ({ categories, setCategories }: EditCategoriesProps) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const input = e.currentTarget.elements.namedItem(
        'simpleInput'
      ) as HTMLInputElement;
      if (input) {
        setCategories((prev) => [...prev, input.value]);
        input.value = '';
      }
    }}
  >
    <input type="text" name="simpleInput" placeholder="Add a category..." />
    <button type="submit">Submit</button>
    {categories.map((category, i) => (
      <div key={i} style={{ marginTop: 8 }}>
        <span style={{ marginRight: 8 }}>{category}</span>
        <button
          type="button"
          onClick={() => {
            setCategories((prev) => prev.filter((_, index) => index !== i));
          }}
        >
          Remove
        </button>
      </div>
    ))}
  </form>
);

export default EditCategories;
