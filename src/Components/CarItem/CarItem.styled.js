import { styled } from "styled-components";

import { ReactComponent as FavIcon } from "images/fav-icon.svg";

export const CarItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  max-width: 274px;
`;

export const CarImage = styled.img`
  display: block;
  height: 268px;
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const StyledHeartIcon = styled(({ isFavorite, ...rest }) => (
  <FavIcon {...rest} data-isfavorite={isFavorite ? "true" : "false"} />
))`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;
  fill: ${({ isFavorite }) => (isFavorite ? "rgba(217, 0, 27, 1)" : "#ccc")};

  cursor: pointer;
  transition: fill 0.3s ease;

  &:hover {
    fill: rgba(217, 0, 27, 1);
  }
`;

export const CarHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding-right: 9px;

  h2,
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  span {
    color: #3470ff;
  }
`;

export const CarHeadAdditional = styled.ul`
  display: flex;
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding-right: 6px;
  }
  :not(:first-child) {
    padding-left: 6px;
  }
`;

export const LearnMoreBtn = styled.button`
  height: 44px;
  margin-top: 28px;

  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  cursor: pointer;
  line-height: 1.28;

  &:hover {
    background-color: #0b44cd;
  }
`;
