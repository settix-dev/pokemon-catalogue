import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
        <Navbar.Brand href="#home">Pokemon Catalogue</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
