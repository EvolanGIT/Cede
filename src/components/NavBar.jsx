import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">C.E.D.E</Navbar.Brand>/Navbar.Brand
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Sign-Up</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
