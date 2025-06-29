import styled from 'styled-components';

export const Form = styled.form`
  width: 250px;
  margin-inline: auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h6 {
      margin-block-end: 0.5rem;
    }
  }
`;

export const AddCategoryField = styled.div``;

export const DeleteCategorySection = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;
