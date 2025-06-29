import * as Styled from './EditCategories.styles';

interface EditCategoriesProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const EditCategories = ({ categories, setCategories }: EditCategoriesProps) => (
  <Styled.Form
    className="card"
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
    <div className="card-body">
      <Styled.AddCategoryField>
        <h6>Add a new category</h6>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="simpleInput"
            placeholder="New category..."
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </Styled.AddCategoryField>

      <Styled.DeleteCategorySection>
        <h6>Delete a category</h6>
        <div>
          {categories.map((category, i) => (
            <button
              key={i}
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() =>
                setCategories((prev) => prev.filter((_, index) => index !== i))
              }
            >
              {category} x
            </button>
          ))}
        </div>
      </Styled.DeleteCategorySection>
    </div>
  </Styled.Form>
);

export default EditCategories;
