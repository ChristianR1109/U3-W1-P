import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => (
  <Navbar expand="lg" className="mb-3" bg="transparent" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src="/assets/logo.png" width="100" height="55" className="d-inline-block align-top me-2" alt="React Bootstrap logo" />
        Home
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>

        <Nav className="ms-auto d-flex text-white ">
          <i className="bi bi-search fs-5 me-2 "></i>
          <p className="mb-0 mx-2">KIDS</p>
          <i className="bi bi-bell mx-2"></i>
          <i className="bi bi-person-circle mx-2"></i>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
