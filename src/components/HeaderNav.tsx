import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { LoginModal } from "./LoginModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "./HeaderLink";

export const HeaderNav = () => {
  let [modalShown, setModalShown] = useState(false);

  const showModal = () => setModalShown(true);
  const hideModal = () => setModalShown(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HeaderLink to={"/features"}>Features</HeaderLink>
            <HeaderLink to={"/pricing"}>Pricing</HeaderLink>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant={"outline-light"} onClick={showModal}>
              Login
            </Button>
            <LoginModal show={modalShown} hideModal={hideModal} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
