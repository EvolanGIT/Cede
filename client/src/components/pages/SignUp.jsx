import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//creating a comment
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER_NEW } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const style = {
    control: { width: "50vw" },
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doNotIntubate, setDoNotIntubate] = useState("");
  const [validated, setValidated] = useState(false);
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [doNotResuscitate, setDoNotResuscitate] = useState(false);
  const [addCustomer] = useMutation(ADD_CUSTOMER_NEW);
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const genders = ["Male", "Female", "Undisclosed"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const customerData = {
      firstName,
      lastName,
      birthdate,
      email,
      password,
      phoneNumber,
      doNotIntubate,
      doNotResuscitate,
      gender,
      bloodType,
    };

    const form = event.currentTarget;
    // if (form.checkValidity() === false) {

    // }
    console.log(customerData);
    try {
      const { data } = await addCustomer({ variables: { ...customerData } });
      AuthService.login(data.addCustomer.token);
    } catch (err) {
      console.error(err);
    }
    setValidated(true);
  };

  return (
    <Container className="mt-3 justify-content-center flex" align="center">
      <Row>
        <Col>
          <Card
            className="shadow-lg"
            style={{
              height: "auto",
              maxWidth: "70%",
              backgroundColor: "#0e385c",
              color: "#b6b7b8",
            }}
          >
            <Form
              column="lg"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group
                className="mx-4 text-start"
                controlId="formEmailSignUp"
              >
                <Form.Label className="mt-3">First Name</Form.Label>
                <Form.Control
                  style={style.control}
                  required
                  type="text"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  placeholder="Enter first name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Enter A First Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Last Name</Form.Label>
                <Form.Control
                  required
                  style={style.control}
                  type="phone"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Enter last name"
                />
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Date of Birth</Form.Label>
                <Form.Control
                  required
                  style={style.control}
                  type="text"
                  name="birthdate"
                  onChange={(e) => setBirthdate(e.target.value)}
                  value={birthdate}
                  placeholder="MM/DD/YYYY"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Enter Date of Birth
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Email address</Form.Label>
                <Form.Control
                  required
                  style={style.control}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter email"
                  pattern="^(.+)@(.+)$"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Enter A Valid Email Address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Password </Form.Label>
                <Form.Control
                  required
                  style={style.control}
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Must contain at least one number and one uppercase and
                  lowercase letter, and at least 8 or more characters
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Gender</Form.Label>
                {genders.map((genderType) => (
                  <div key={genderType} className="mb-3">
                    <Form.Check
                      type={"checkbox"}
                      id={`${genderType}checkbox`}
                      label={genderType}
                      name={"gender"}
                      checked={gender === genderType}
                      onChange={() => setGender(genderType)}
                      value={genderType}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Phone Number</Form.Label>
                <Form.Control
                  style={style.control}
                  required
                  type="phone"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  placeholder="Enter your Phone Number"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Provide a Good Phone Number to Reach You.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-4 text-start">
                <Form.Label className="mt-3">Blood Type</Form.Label>
                {bloodTypes.map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check
                      type={"checkbox"}
                      id={`${type}checkbox`}
                      label={type}
                      name={type}
                      checked={bloodType === type}
                      onChange={() => setBloodType(type)}
                      value={type}
                    />
                  </div>
                ))}
                <Form.Label className="mt-3">
                  Do you have a &nbsp;
                  <Link 
                    className="link-success"
                    role="button"
                    to="https://www.opencaregiving.com/glossary/do-not-resuscitate-dnr#:~:text=A%20DNR%20is%20an%20order,person's%20heart%20or%20breathing%20stops.">
                   DNR order?
                  </Link>
                </Form.Label>
                <br />
                <div>
                  <Form.Check
                    inline
                    label="Yes"
                    name="group1"
                    type="checkbox"
                    id="resuscitateNO"
                    checked={doNotResuscitate === true}
                    onChange={() => setDoNotResuscitate(true)}
                    value={true}
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type="checkbox"
                    id="resuscitateYES"
                    checked={doNotResuscitate === false}
                    onChange={() => setDoNotResuscitate(false)}
                    value={false}
                  />
                </div>
                <br />
                <Form.Label className="mt-3">
                  Do you have a &nbsp;
                  <Link 
                    className="link-success"
                    role="button"
                    to="https://www.opencaregiving.com/glossary/do-not-intubate-dni#:~:text=A%20DNI%20order%20is%20authorized,the%20passage%20to%20their%20lungs.">
                    DNI order?
                  </Link> 
                </Form.Label>
                <br />
                <div>
                  <Form.Check
                    inline
                    label="Yes"
                    name="group1"
                    type="checkbox"
                    id="resuscitateNO"
                    checked={doNotIntubate === true}
                    onChange={() => setDoNotIntubate(true)}
                    value={true}
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type="checkbox"
                    id="resuscitateYES"
                    checked={doNotIntubate === false}
                    onChange={() => setDoNotIntubate(false)}
                    value={false}
                  />
                </div>
                <br />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mx-4 m-3 text-start"
                controlId="formPasswordSignUp"
              ></Form.Group>
              <Button variant="dark" type="submit" className="mb-3">
                Sign-Up
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
