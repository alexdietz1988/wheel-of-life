import styled from 'styled-components';

export const Wheel = styled.div`
  & * {
    outline: none;
  }

  & > * > * > * > *:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
