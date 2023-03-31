import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    // took out bg dark
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          C.E.D.E
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#signUp"
            onClick={() => handlePageChange("SignUp")}
            className={
              currentPage === "SignUp" ? "nav-link active" : "nav-link"
            }
          >
            Sign-Up
          </Nav.Link>
          <Nav.Link
            href="#login"
            onClick={() => handlePageChange("Login")}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="#dashboard"
            onClick={() => handlePageChange("Dashboard")}
            className={
              currentPage === "Dashboard" ? "nav-link disabled" : "nav-link"
            }
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="#contactUs"
            onClick={() => handlePageChange("ContactUs")}
            className={
              currentPage === "ContactUs" ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
