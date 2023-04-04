import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
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
                alt="Codesmen logo"
              />
            </Link>
          </Navbar.Brand>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </footer>
);

}

export default Footer;
