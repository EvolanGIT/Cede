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

export default function Dashboard(props) {
  //  Grab id from localstorage
  // localStorage.getItem(_id);
  //grab query to find One customer and pass id using useQuery hook
  const { data, loading, error } = useQuery(RETURN_ONE_CUSTOMER);
  //destructure loading and data from the hook

  //create ternary where loading if true shows loading screen else show data.

  // const loggedIn = () => {
  if (loading) return "Loading...";
  if (error) return <h1 style={{ color: "Red" }}>{error.message}</h1>;
  // const customer = data?customers;
  console.log(data);
  localStorage.setItem("_id", data.me._id);
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

            <p>First Name: {data.me.firstName}</p>
            <p>Last Name: {data.me.lastName}</p>
            <p>Date of Birth: {data.me.birthdate}</p>
            <p>Email: {data.me.email}</p>
            <p>Gender: {data.me.gender}</p>
            <p>Phone Number: {data.me.phoneNumber}</p>

            <h2>Clinical Information</h2>
            <p>Blood Type: {data.me.bloodType}</p>
            <p>Do not Resuscitate: {data.me.doNotResuscitate ? "Yes" : "No"}</p>
            <p>Do not Intubate: {data.me.doNotIntubate ? "Yes" : "No"}</p>

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
