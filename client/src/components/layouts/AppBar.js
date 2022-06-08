import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const AppBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <NavbarBrand>Family App</NavbarBrand>

        <Navbar.Toggle aria-controls="nav-res" />

        <Navbar.Collapse id="nav-res">
          <Nav className="me-auto">
            <Nav.Link href="/posts">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
