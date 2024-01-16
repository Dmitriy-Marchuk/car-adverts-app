import styled from "styled-components";

export const CarCollectionWrapper = styled.ul`
  @media (min-width: 768px) {
    max-width: calc(100vw - 256px);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  padding: 50px 0 0 0;
`;

export const LoadMoreBtn = styled.button`
  border: none;
  background: none;
  padding: 5px 10px;
  text-decoration: underline;
  color: rgba(52, 112, 255, 1);
  margin-top: 100px;

  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;
