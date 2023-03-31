import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//creating a comment
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER_NEW } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignUp = () => {
  const style = {
    control: { width: "25rem" },
  };

  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName] = useState("");
  const [ birthdate, setBirthdate] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ phoneNumber, setPhoneNumber] = useState("");
  const [ doNotIntubate, setDoNotIntubate] = useState("");
  const [validated, setValidated] = useState(false);
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [doNotResuscitate, setDoNotResuscitate] = useState(false);
  const [addCustomer] = useMutation(ADD_CUSTOMER_NEW);
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const genders = ["Male", "Female", "Undisclosed"]
  console.log(firstName)

  const handleSubmit = async (event) => {
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
      bloodType
    }
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(customerData);
    try {
      const { data } = await addCustomer({ variables: { ...customerData } });
      Auth.login(data.addCustomer.token);
    } catch (err) {
      console.error(err);
    }
    setValidated(true);
  };

  console.log("gender", gender);

  return (
    <Container className="mt-3 justify-content-center" align="center">
      <Card
        className="shadow-lg"
        style={{ width: "40rem", backgroundColor: "#0e385c", color: "#959696" }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mx-4 text-start" controlId="formEmailSignUp">
            <Form.Label className="mt-3">First Name</Form.Label>
            <Form.Control
              style={style.control}
              required
              type="text"
              name="firstName"
              onChange={(e)=>setFirstName(e.target.value)}
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
              onChange={(e)=>setLastName(e.target.value)}
              value={lastName}
              placeholder="Enter last name"
            />
            <Form.Label className="mt-3">Date of Birth</Form.Label>
            <Form.Control
              required
              // style={style.control}
              type="text"
              name="birthdate"
              onChange={(e)=>setBirthdate(e.target.value)}
              value={birthdate}
              placeholder="Enter your DoB"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter A Last Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mx-4 text-start">
            <Form.Label className="mt-3">Email address</Form.Label>
            <Form.Control
              required
              style={style.control}
              type="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Must contain at least one number and one uppercase and lowercase
              letter, and at least 8 or more characters
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
              onChange={(e)=>setPhoneNumber(e.target.value)}
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
                  checked={bloodType === type }
                  onChange={() => setBloodType(type)}
                  value={type}
                />
              </div>
            ))}
            <Form.Label className="mt-3">
              In case of an emergency, would you want the paramedics to try to
              resuscitate you?
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
                onChange={()=>setDoNotResuscitate(true)}
                value={true}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type="checkbox"
                id="resuscitateYES"
                checked={doNotResuscitate === false}
                onChange={()=>setDoNotResuscitate(false)}
                value={false}
              />
            </div>
            <br />
            <Form.Label className="mt-3">
              In case of an emergency, would you want the paramedics to try to
              intubate you?
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
                onChange={()=>setDoNotIntubate(true)}
                value={true}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type="checkbox"
                id="resuscitateYES"
                checked={doNotIntubate === false}
                onChange={()=>setDoNotIntubate(false)}
                value={false}
              />
            </div>
              <br/>
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
    </Container>
  );
};

export default SignUp;
