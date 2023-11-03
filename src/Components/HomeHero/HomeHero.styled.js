import { styled } from "styled-components";

export const HeroWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
