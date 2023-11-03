import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavItem = styled(NavLink)`
  padding: 4px 20px;
  color: rgba(0, 113, 227, 1);
  text-decoration: none;
  font-size: 30px;
  :first-child {
    margin-right: 10px;
  }
  &.active {
    color: rgba(217, 0, 27, 1);
  }
  :hover:not(.active) {
    color: #f6ad55;
    transition: ease-in-out 250ms;
  }
  @media screen and (max-width: 499px) {
    font-size: 20px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
