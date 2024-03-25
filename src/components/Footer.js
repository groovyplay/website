import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-gp2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <img className="logo-footer" src={logo} alt="Logo" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-end">
        <p className="mb-0">@ GroovyPlay 2024. All Rights Reserved</p>
        <br></br>
      </Container>
    </footer>
  );
};
