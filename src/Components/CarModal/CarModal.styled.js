import { styled } from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2000%;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 50px;
  z-index: 1000;
  overflow: hidden;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 541px;
  z-index: 1001;
  padding: 40px;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const ModalImage = styled.img`
  width: 461px;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalHead = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 14px;
  margin-bottom: 8px;
  span {
    color: #3470ff;
  }
`;

export const AdditionalModal = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-left: -6px;

  p {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding-right: 6px;
    padding-left: 6px;
  }

  /* :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding-right: 6px;
  }
  :not(:first-child) {
    padding-left: 6px;
  } */
`;

export const DescriptionParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-top: 14px;
`;

export const AdditionalTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.42;
  font-weight: 500;
`;

export const ConditionsRental = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;

  p {
    padding: 7px 14px;
    margin-right: 7px;
    margin-bottom: 8px;

    background-color: #f9f9f9;
    border-radius: 35px;
  }
  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const RentalButton = styled.button`
  background-color: #3470ff;
  padding: 12px 50px;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  &:hover {
    background-color: #0b44cd;
  }
`;
