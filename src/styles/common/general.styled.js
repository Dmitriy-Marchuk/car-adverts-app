import { styled } from "styled-components";

export const Section = styled.section`
  padding: 0 128px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const FindCarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
