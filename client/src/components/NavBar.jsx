import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/cede_logofull-noBG.png";
import AuthService from "../utils/auth";
import { Link } from "react-router-dom";

// Commented out the handlePage Change and used an href through React Router instead DI
const NavBar = ({ currentPage }) => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
    // took out bg dark style={{ background: "#18313f" }}
    <Navbar expand="lg" variant="dark">
      <Container>
        <Nav>
        <Navbar.Brand
          href="/"
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <img width="200" className="" src={Logo} />
        </Navbar.Brand>

          {AuthService.loggedIn() ? (
            <Nav.Link
              to="/login"
              onClick={logout}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >              
                Logout
            </Nav.Link>
          ) : (
            <Nav.Link
              href="/login"
              // onClick={() => handlePageChange("Login")}
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              Login
            </Nav.Link>
          )}
          <Nav.Link
            href="/dashboard"
            //onClick={() => handlePageChange("Dashboard")}
            className={
              currentPage === "Dashboard" ? "nav-link disabled" : "nav-link"
            }
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="/contact-us"
            //onClick={() => handlePageChange("ContactUs")}
            className={
              currentPage === "ContactUs" ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </Nav.Link>
          <Nav.Link
            href="/provider"
            //onClick={() => handlePageChange("Provider")}
            className={
              currentPage === "Provider" ? "nav-link active" : "nav-link"
            }
          >
            Provider
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
