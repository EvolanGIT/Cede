import React from "react";
import { Container } from "react-bootstrap";

function CustomerInfo(props) {
  // Temporary JSON to render informtin for now.
  const customer = {
    firstName: "Ben",
    lastName: "Salem",
    dob: "01/01/1980",
    email: "ben@mail@.com",
    gender: "Male",
    phoneNumber: "123-456-7890",
    bloodType: "AB+",
    doNotResuscitate: false,
    doNotIntubate: true,
    allergies: ["Peanuts", "Penicillin"],
    emergencyContacts: [
      {
        firstName: "Some",
        lastName: "Body",
        phoneNumber: "234-567-8901",
      },
      {
        firstName: "Bob",
        lastName: "Salem",
        phoneNumber: "345-678-9012",
      },
    ],
  };
  // This renders the patient information page
  return (
    <Container>
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
          <p>Do not Resuscitate: {customer.doNotResuscitate ? "Yes" : "No"}</p>
          <p>Do not Intubate: {customer.doNotIntubate ? "Yes" : "No"}</p>

          <h3>Allergies</h3>
          <ul style={{ listStyle: "none" }}>
            {customer.allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
          <h2>Emergency Contacts</h2>
          <ul style={{ listStyle: "none" }}>
            {customer.emergencyContacts.map((contact, index) => (
              <li key={index}>
                First Name: {contact.firstName}, Last Name: {contact.lastName},
                Phone Number: {contact.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default CustomerInfo;
