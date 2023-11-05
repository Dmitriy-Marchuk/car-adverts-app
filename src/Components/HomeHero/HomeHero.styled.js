import { styled } from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  p {
    max-width: 800px;
  }

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;
