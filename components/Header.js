import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {

  return (
    <>
      <Container fluid >
        <Row className="align-items-center d-none d-md-flex " style={{ backgroundColor: '#253d1f', height: '50px', color:'#fff' }}>
          <Col xs={12} md={1} >
            <b>Cars</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Vans</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Minibus</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Suv</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Trucks</b>
          </Col>
          <Col xs={12} md={1} >
            <b>Cars</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Vans</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Minibus</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Suv</b>
          </Col>
          <Col xs={12} md={1}>
          <b>Trucks</b>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
