import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Navigate,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
        <Navbar.Brand href="#home">Pokemon Catalogue</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#berries">Berries</Nav.Link>
            <Nav.Link href="#berry">Berry</Nav.Link>
            <Nav.Link href="#berryItems">BerryItems</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/berries">Berries</Link>
        </li>
        <li>
          <Link to="/berry">Berry</Link>
        </li>
        <li>
          <Link to="/berryItems">BerryItems</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
