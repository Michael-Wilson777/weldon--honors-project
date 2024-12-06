//Navbar component
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const cartList = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  // let total = cartList.reduce((previousValue, currentValue) => {
  //   return previousValue + currentValue.price;
  // }, 0);
  return (
    <Navbar dark sticky="top" expand="md">
      <NavbarBrand href="/">
        <h1>Weld On!</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav navbar className="ms-auto">
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="information" className="nav-link">
              Information
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="education">Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/shop">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cart">
              Cart Items: {cartCount} Cart Total: {cartTotal}
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="contact">Contact</NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
