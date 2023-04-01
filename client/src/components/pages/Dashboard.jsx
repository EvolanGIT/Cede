import {
  Container,
  Form,
  Card,
  Button,
  Col,
  Row,
  Stack,
} from "react-bootstrap";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import AuthService from "../../utils/auth";
import { RETURN_ONE_CUSTOMER } from "../../utils/queries";

function Dashboard(props) {
  //  Grab id from localstorage
  // localStorage.getItem(id);
  //grab query to find One customer and pass id using useQuery hook
  //destructure loading and data from the hook
  const { data, loading, error } = useQuery(RETURN_ONE_CUSTOMER);
  
  // const token = AuthService.loggedIn() ? AuthService.getToken() : null; 
  // if (!token){
  //   return
  // }
  
  console.log(data);
  //create ternary where loading if true shows loading screen else show data.

  // const loggedIn = () => {
  if (loading) return "Loading...";
  if (error) return <h1 style={{ color: "Red" }}>{error.message}</h1>;
  const customer = data?.customers;
  // This renders the patient information page
  return (
    <Container>
      <Card
        className="shadow-lg"
        style={{
          alignContent: "center",
          backgroundColor: "#0e385c",
          color: "#959696",
        }}
      >
        <div style={{ backgroundColor: "#0e385c", color: "#959696" }}>
          <h1>Customer Information Sheet</h1>
          <div>
            <h2>Personal Information</h2>

            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>DoB: {customer.birthdate}</p>
            <p>Email: {customer.email}</p>
            <p>Gender: {customer.gender}</p>
            <p>Phone Number: {customer.phoneNumber}</p>

            <h2>Clinical Information</h2>
            <p>Blood Type: {customer.bloodType}</p>
            <p>
              Do not Resuscitate: {customer.doNotResuscitate}
            </p>
            <p>Do not Intubate: {customer.doNotIntubate}</p>

            {/* <h3>Allergies</h3>
            <ul class="nopadding" style={{ listStyle: "none" }}>
              {customer.allergies.map((allergy, index) => (
                <li key={index}>{allergy}</li>
              ))}
            </ul>
            <h2>Emergency Contacts</h2>
            <ul style={{ listStyle: "none" }}>
              {customer.emergencyContacts.map((contact, index) => (
                <li key={index}>
                  First Name: {contact.firstName},<br></br>
                  Last Name: {contact.lastName},<br></br>
                  <div style={{ color: "lime" }}>
                    Phone Number: {contact.phoneNumber}
                  </div>
                </li> */}
              {/* ))}
            </ul> */}
          </div>
        </div>
      </Card>
      {/* <Stack direction="vertical" gap={6}>
        <Button
          href="#editInfo"
          // onClick={Edit}
          variant="info"
          type="submit"
          size="lg"
          className="mb-3 w-50"
        >
          Update Profile
        </Button>
        <br></br>
        <Button variant="danger" type="Submit" size="sm" className="mb-3 w-25">
          Delete Profile
        </Button>
      </Stack> */}
    </Container>
  );
}

// }
export default Dashboard;
