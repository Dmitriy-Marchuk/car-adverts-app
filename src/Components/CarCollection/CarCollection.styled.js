import styled from "styled-components";

export const CarCollectionWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  max-width: calc(100vw - 256px);
  grid-column-gap: 29px;
  grid-row-gap: 50px;

  padding-top: 50px;
`;
