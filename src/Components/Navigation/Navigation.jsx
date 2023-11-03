import { NavItem, NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/search">Find Car</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
