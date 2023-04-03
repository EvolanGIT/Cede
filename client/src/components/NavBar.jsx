import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/cede_logofull-noBG.png";
import AuthService from "../utils/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Commented out the handlePage Change and used an href through React Router instead DI
const NavBar = ({ currentPage }) => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  const [userId, setuserId] = useState("");
  useEffect(() => {
    return setuserId(localStorage.getItem("_id"));
  }, []);
  console.log(userId);

  return (
    // took out bg dark style={{ background: "#18313f" }}
    <Navbar expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            <img width="200" className="" src={Logo} />
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to="/signup"
            className={
              currentPage === "SignUp" ? "nav-link active" : "nav-link"
            }
          >
            Sign-Up
          </Link>
          {AuthService.loggedIn() ? (
            <Link
              to="/login"
              onClick={logout}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              Login
            </Link>
          )}
          {AuthService.loggedIn() ? (
            <Link
              to={`/dashboard/${userId}`}
              className={
                currentPage === "Dashboard" ? "nav-link disabled" : "nav-link"
              }
            >
              Dashboard
            </Link>
          ) : null}
          <Link
            to="/contact-us"
            className={
              currentPage === "ContactUs" ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </Link>
          <Link
            to="/provider"
            className={
              currentPage === "Provider" ? "nav-link active" : "nav-link"
            }
          >
            Provider
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
