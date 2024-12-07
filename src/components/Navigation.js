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
  const cartTotal = useSelector((state) => state.cart.totalPrice);

  return (
    <Navbar className='bg-dark' dark sticky="top" expand="md">
      <NavbarBrand href="/">
        <h1>Weld On!</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav navbar className="ms-auto">
          <NavItem>
            <NavLink className='text-light nav-link' to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link text-light' to="/message-board">Questions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-light nav-link' to="/shop">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-light nav-link' to="/cart">
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
