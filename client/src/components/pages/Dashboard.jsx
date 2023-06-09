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
import { gql, useQuery } from "@apollo/client";
import AuthService from "../../utils/auth";
import { RETURN_ONE_CUSTOMER, RETURN_ALL_CUSTOMERS } from "../../utils/queries";
import { useParams } from "react-router";

export default function Dashboard(props) {
  const { userId } = useParams();

  //  Grab id from localstorage
  // localStorage.getItem(_id);
  //grab query to find One customer and pass id using useQuery hook

  const { data, loading, error } = useQuery(RETURN_ONE_CUSTOMER, {
    variables: { customerId: userId },
  });
  //destructure loading and data from the hook

  //create ternary where loading if true shows loading screen else show data.

  // const loggedIn = () => {
    
  if (loading) return <h1 style={{ color: "Green " }}> Now Loading!!!</h1>;
  if (error) return <h1 style={{ color: "Red" }}>{error.message}</h1>;
  const customer = data?.customer;
  console.log(data);
  // localStorage.setItem("_id", data.me._id);
  // This renders the patient information page
  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="shadow-lg "
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h1>Customer Information Sheet</h1>
            </Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card
            className="shadow-lg m-2"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h2>Personal Information</h2>
            </Card.Title>
            <Card.Body>
              <div>
                <p>First Name: {customer.firstName}</p>
                <p>Last Name: {customer.lastName}</p>
                <p>Date of Birth: {customer.birthdate}</p>
                <p>Email: {customer.email}</p>
                <p>Gender: {customer.gender}</p>
                <p>Phone Number: {customer.phoneNumber}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card
            className="shadow-lg m-2"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h2>Clinical Information</h2>
            </Card.Title>
            <Card.Body>
              <div>
                <p>Blood Type: {customer.bloodType}</p>
                <p>
                  Do not Resuscitate: {customer.doNotResuscitate ? "Yes" : "No"}
                </p>
                <p>Do not Intubate: {customer.doNotIntubate ? "Yes" : "No"}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
    </Container>
  );
}
// export default Dashboard;

// return <Link to="/Dashboard" />;
// {
//   firstName: "Ben",
//   lastName: "Salem",
//   dob: "01/01/1980",
//   email: "ben@mail.com",
//   gender: "Male",
//   phoneNumber: "123-456-7890",
//   bloodType: "AB+",
//   doNotResuscitate: false,
//   doNotIntubate: true,
//   allergies: ["Peanuts", "Penicillin"],
//   emergencyContacts: [
//     {
//       firstName: "Some",
//       lastName: "Body",
//       phoneNumber: "234-567-8901",
//     },
//     {
//       firstName: "Bob",
//       lastName: "Salem",
//       phoneNumber: "345-678-9012",
//     },
//   ],
// };
