import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CodesmanLogo from "../assets/images/4C.png";


const Footer = () => {

return (
  <footer
    className="pt-1"
    style={{
      marginTop: "auto",
      background: "linear-gradient(45deg, #112a48, #000b10)",
      opacity: ".95",
    }}
  >
    <Container>
      <Row className="">
        <Col></Col>
        <Col md={2} variant="light" style={{ color: "#dfe0e1", fontSize:"11px", paddingTop:"15px" }}>
          <p>Proudly brought to you by:</p>
        </Col>
        <Col md={2}>
          <Navbar.Brand href="/">
            <Link to="/">
              <img
                width="100"
                className=""
                style={{ background: "#0e2743", opacity: ".80" }}
                src={CodesmanLogo}
              />
            </Link>
          </Navbar.Brand>
        </Col>
        <Col></Col>
        {/* <Col md={4}>
          <Nav>
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
          </Nav>
        </Col>
        <Col md={2} style={{ color: "#dfe0e1" }}>
          <p>&copy; {new Date().getFullYear()} CEDE</p>
        </Col> */}
      </Row>
    </Container>
  </footer>
);

}

export default Footer;
