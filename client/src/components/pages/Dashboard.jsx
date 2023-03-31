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
import { gql, useQuery, useMutation } from "@apollo/client";

function Dashboard(props) {
  //  Grab id from localstorage
  //localStorage.getItem(id_token);
  //grab query to find One customer and pass id using useQuery hook
  const FIND_CUSTOMER = gql`
      {
      customers {
        firstName
        lastName
        password
        birthday
        email
        gender
        phoneNumber
        bloodType
        DNR
        DNI
        emergencyContacts
        allergy
      }
    }
  `;
  //destructure loading and data from the hook
  const { data, loading, error } = useQuery(FIND_CUSTOMER);
  //create ternary where loading if true shows loading screen else show data.
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const customer = data?.customer;
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
  // const [editCustomer] = useMutation(EDIT_CUSTOMER);
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
            <p>DoB: {customer.dob}</p>
            <p>Email: {customer.email}</p>
            <p>Gender: {customer.gender}</p>
            <p>Phone Number: {customer.phoneNumber}</p>

            <h2>Clinical Information</h2>
            <p>Blood Type: {customer.bloodType}</p>
            <p>
              Do not Resuscitate: {customer.doNotResuscitate ? "Yes" : "No"}
            </p>
            <p>Do not Intubate: {customer.doNotIntubate ? "Yes" : "No"}</p>

            <h3>Allergies</h3>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      <Stack direction="vertical" gap={6}>
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
      </Stack>
    </Container>
  );
}
export default Dashboard;
