import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => (
  <Container className=" text-secondary py-5 px-0">
    <Container>
      <Container className="d-flex justify-content-start mb-3">
        <i className="bi bi-facebook me-3 fs-4"></i>
        <i className="bi bi-instagram me-3 fs-4"></i>
        <i className="bi bi-twitter-x me-3 fs-4"></i>
        <i className="bi bi-youtube fs-4"></i>
      </Container>
      <Row className=" g-3 mb-4">
        <Col xs={6} md={3}>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Audio and Subtitles
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Media Center
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Privacy
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Contact us
          </a>
        </Col>
        <Col Col xs={6} md={3}>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Audio Description
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Investor Relations
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Legal Notices
          </a>
        </Col>
        <Col Col xs={6} md={3}>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Help Center
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Jobs
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Cookie Preferences
          </a>
        </Col>
        <Col Col xs={6} md={3}>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Gift Cards
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Terms of Use
          </a>
          <a href="#" className="d-block text-secondary text-decoration-none">
            Corporate Information
          </a>
        </Col>
      </Row>
      <Container className="mb-3">
        <button className="btn border-secondary rounded-0 text-secondary">Service Code</button>
      </Container>
      <Container className="text-secondary small">© 1997–2023 Netflix, Inc.</Container>
    </Container>
  </Container>
);

export default MyFooter;
