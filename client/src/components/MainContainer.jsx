import { useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./NavBar";
import ContactUs from "./pages/ContactUs";
import Provider from "./pages/Provider";
import Home from "./pages/Home";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

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
    if (currentPage === "ContactUs") {
      return <ContactUs />;
    }
    if (currentPage === "Provider") {
      return <Provider />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/4178252.jpg")`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        height: "100vw",
      }}
    >
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    return <ContactUs />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (

    <div style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/4178252.jpg")`,
      backgroundSize: '100%',
      backgroundRepeat: 'repeat-y',
      height: 'auto',
      width: "100%",
      objectFit:"scale-down"
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
};
export default MainContainer;
