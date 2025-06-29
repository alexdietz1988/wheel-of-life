import styled from 'styled-components';

export const Wheel = styled.div`
  & * {
    outline: none;
  }

  .recharts-pie-sector {
    opacity: 0.9;

    &:hover,
    &:has(.is-selected) {
      opacity: 1;
    }

    &:hover {
      cursor: pointer;
    }
  }

  text {
    fill: white;

    &.is-selected {
      font-weight: bold;
      fill: yellow;
    }
    &:hover {
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
`;
