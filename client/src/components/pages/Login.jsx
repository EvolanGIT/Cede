import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {Row, Col} from "react-bootstrap"
import AuthService from "../../utils/auth"
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { Link } from "react-router-dom"

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      const customerId = mutationResponse.data.login.customer._id
      localStorage.setItem("_id", customerId)
      AuthService.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className="mt-3" align="center">

       
        <Col xs={12} md={6}>
          <Card
            className="shadow-lg flex"
            style={{
              backgroundColor: "#0e385c",
              color: "#959696",
              width: "25rem",
            }}
          >
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mx-4 text-start" controlId="formLogin">
                <Form.Label className="mt-3">Login</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mx-4 m-3 text-start"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
                <Button variant="dark" type="submit" className="mb-3">
                  Login
                </Button>
            </Form>
          </Card>
        </Col>
      
    </Container>
  );
};

export default Login;
