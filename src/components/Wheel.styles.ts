import styled from 'styled-components';

export const Wheel = styled.div`
  & * {
    outline: none;
  }

  & > * > * > * > *:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  text {
    font-size: 16px;
    fill: white;

    &.is-selected {
      font-weight: bold;
      fill: yellow;
    }
  }
`;
