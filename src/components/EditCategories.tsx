import * as Styled from './EditCategories.styles';

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
    <Styled.AddCategoryField>
      <input
        type="text"
        className="form-control"
        name="simpleInput"
        placeholder="Add a category..."
      />
      <button
        className="btn btn-success"
        type="submit"
      >
        Submit
      </button>
    </Styled.AddCategoryField>

    {categories.map((category, i) => (
      <div key={i} style={{ margin: '1rem' }}>
        <span style={{ marginRight: '1rem' }}>{category}</span>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => {
            setCategories((prev) => prev.filter((_, index) => index !== i));
          }}
        >
          -
        </button>
      </div>
    ))}
  </form>
);

export default EditCategories;
