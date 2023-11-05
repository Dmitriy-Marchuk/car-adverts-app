import { NavItem, NavWrapper } from "Components/Navigation/Navigation.styled";

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
