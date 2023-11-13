import ReactModal from "react-modal";
import { styled } from "styled-components";

export const ModalWrapped = styled(ReactModal)`
  position: relative;
  max-width: 541px;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  outline: none;
  border-radius: 24px;
  background-color: #fff;
`;

export const ModalImage = styled.img`
  display: block;
  width: 461px;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const ModalHead = styled.h2`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  span {
    color: #3470ff;
  }
`;

export const AdditionalModal = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  li {
    padding-right: 6px;
    padding-left: 6px;
    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }
`;

export const DescriptionParagraph = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
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
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  p {
    padding: 7px 14px;
    margin-right: 7px;
    margin-bottom: 8px;
    border-radius: 35px;
    background-color: #f9f9f9;
  }
  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const RentalButton = styled.a`
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  padding: 10px;

  &:hover {
    background-color: rgba(247, 247, 251, 1);
    border-radius: 30%;
  }
`;
