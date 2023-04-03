import { useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./NavBar";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Provider from "./pages/Provider";
import { useQuery } from "@apollo/client";
import { RETURN_ONE_CUSTOMER } from "../utils/queries";

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
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    if (currentPage === "Provider") {
      return <Provider />;
    }
    return <ContactUs />;
  };

  return (
    <div >
      {renderPage()}
      
    </div>
  );
};
export default MainContainer;
