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
    <input
      type="text"
      name="simpleInput"
      placeholder="Add a category..."
      style={{ border: '1px solid black' }}
    />
    <button type="submit" style={{ border: '1px solid black' }}>
      Submit
    </button>
    {categories.map((category, i) => (
      <div key={i} style={{ marginTop: 8 }}>
        <span style={{ marginRight: 8 }}>{category}</span>
        <button
          type="button"
          onClick={() => {
            setCategories((prev) => prev.filter((_, index) => index !== i));
          }}
          style={{ border: '1px solid black' }}
        >
          Remove
        </button>
      </div>
    ))}
  </form>
);

export default EditCategories;
