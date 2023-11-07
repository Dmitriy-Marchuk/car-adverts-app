import styled from "styled-components";

export const StyledForm = styled.form`
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px 0;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  flex-direction: row;
  @media (max-width: 1024px) {
    margin: 10px 0 0 0;
  }
`;

export const StyledSearchBtn = styled.button`
  @media (max-width: 1024px) {
    margin: 20px 0 0 0;
  }
  background-color: #3470ff;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 14px 44px;
  cursor: pointer;
  line-height: 1.28;
  max-height: 48px;
  margin-left: 18px;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const selectCarStyles = {
  control: (base) => ({
    ...base,
    width: "244px",
    height: "48px",
    marginRight: "18px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
    color: "#121417",
    boxShadow: "none",
    cursor: "text",
  }),
  placeholder: (base) => ({
    ...base,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.28",
    color: "#121417",
  }),
  menu: (base) => ({
    ...base,
    width: "244px",
    borderRadius: "14px",
    overflow: "hidden",
  }),
};

export const selectMonthlyPriceStyles = {
  control: (base) => ({
    ...base,
    width: "125px",
    height: "48px",
    marginRight: "18px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
    color: "#121417",
    boxShadow: "none",
    cursor: "pointer",
  }),
  placeholder: (base) => ({
    ...base,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.28",
    color: "#121417",
  }),
  menu: (base) => ({
    ...base,
    width: "125px",
    borderRadius: "14px",
    overflow: "hidden",
  }),
};

export const CarMilageWrapper = styled.div`
  display: flex;
`;

export const InputMilageFromStyled = styled.input`
  width: 160px;
  height: 48px;
  border-radius: 14px 0 0 14px;
  border: 0;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  outline: none;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.28;

  &::placeholder {
    color: #121417;
  }
`;

export const InputMilageToStyled = styled.input`
  width: 160px;
  height: 48px;
  border-radius: 0 14px 14px 0;
  border: 0;
  background-color: #f7f7fb;
  outline: none;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.28;

  &::placeholder {
    color: #121417;
  }
`;
