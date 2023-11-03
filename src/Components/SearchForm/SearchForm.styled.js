import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
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
`;

// const StyledButton = styled.button`
//   /* Здесь вы можете определить стили для кнопки */
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// `;

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
