import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; //importing component from QR library
import ContactUs from "./components/pages/ContactUs";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
//import editInfo from "./components/pages/editInfo";
import Provider from "./components/pages/Provider";
import QrCode from "./components/pages/QrCode";
import SignUp from "./components/pages/SignUp";
import CustomerInfo from "./components/pages/CustomerInfo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [userId, setuserId] = useState("");
  //usena
  useEffect(() => {
    return setuserId(localStorage.getItem("_id"));
  }, []);
  console.log(userId);
  return (
    <ApolloProvider client={client}>
      {/* Added Routes to Navbar DI  */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path={`/dashboard/:userId`} element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/edit" element={<editInfo />}/> */}
            <Route path="/provider" element={<Provider />} />
            <Route path="/qr" element={<QrCode />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/customer-info" element={<CustomerInfo />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
