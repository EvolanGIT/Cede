import { useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"
import NavBar from "./NavBar";
import ContactUs from "./pages/ContactUs"
import Home from './pages/Home'

const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    return <ContactUs />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  )
};
export default MainContainer;
