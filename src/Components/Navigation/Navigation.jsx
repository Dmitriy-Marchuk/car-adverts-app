import { NavItem } from "./Navigation.styled";

const Navigation = () => {
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/search">Find Car</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </nav>
  );
};

export default Navigation;
