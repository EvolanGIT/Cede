import {Container, Form, Card, Button } from "react-bootstrap";
import React, { useState } from "react";


const ContactUs = () => {
  
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  

  const handleInputChange = (event) => {
     const { name, value } = event.target;
     setContactFormData({ ...contactFormData, [name]: value });
  } 

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(contactFormData);
        // Here you can add your code to submit the form data to the server

  }



  return (
    <Container className="mt-3" align="center">
      <Card
        className="shadow-lg"
        style={{
          backgroundColor: "#0e385c",
          color: "#959696",
          width: "25rem",
        }}
      >
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mx-4 text-start" controlId="formContactUs">
            <Form.Label className="mt-3">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              // value={contactFormData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mx-4 text-start" controlId="formEmail">
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              // value={contactFormData.email}
              onChange={handleInputChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
            />
          </Form.Group>
          <Form.Group className="mx-4 text-start" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Enter your message"
              rows={4}
              // value={contactFormData.message}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactUs;
