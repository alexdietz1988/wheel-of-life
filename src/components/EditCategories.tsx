import * as Styled from './EditCategories.styles';
import { type Data } from '@/App';

interface EditCategoriesProps {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

const EditCategories = ({ data, setData }: EditCategoriesProps) => (
  <Styled.Form
    className="card"
    onSubmit={(e) => {
      e.preventDefault();
      const input = e.currentTarget.elements.namedItem(
        'simpleInput'
      ) as HTMLInputElement;
      if (input) {
        {
          setData((prev) => ({
            ...prev,
            categories: [
              ...prev.categories,
              { name: input.value, value: 1, subcategories: [] },
            ],
          }));
        }
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
          {data.categories.map((category, i) => (
            <button
              key={i}
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() =>
                setData((prev) => ({
                  ...prev,
                  categories: prev.categories.filter((_, index) => index !== i),
                }))
              }
            >
              {category.name} x
            </button>
          ))}
        </div>
      </Styled.DeleteCategorySection>
    </div>
  </Styled.Form>
);

export default EditCategories;
