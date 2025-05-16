import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const MyHero = () => (
  <Container fluid className=" px-4 d-flex justify-content-between align-items-center">
    <Container fluid className="m-0 p-0 d-flex text-white align-items-center">
      <h3 className="me-3">TV Shows</h3>
      <Dropdown>
        <Dropdown.Toggle className="border border-white rounded-0 text-white" variant="transparent" id="dropdown-basic">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
    <Container fluid className="m-0 p-0 text-white fs-5 d-flex align-items-center justify-content-end">
      <i className="bi bi-grid me-5"></i>
      <i className="bi bi-grid-3x3"></i>
    </Container>
  </Container>
);

export default MyHero;
