import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//creating a comment

const SignUp = () => {
  const [gender, setGender] = useState("Male");
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Card className="shadow-lg">
            <Form>
              <Form.Group
                className="mx-4 text-start"
                controlId="formEmailSignUp"
              >
                <Form.Label className="mt-3">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
                <Form.Label className="mt-3">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
                <Form.Label className="mt-3">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Label className="mt-3">Sex</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`Male-${type}`}
                      label="Male"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                    />
                    <Form.Check
                      type={type}
                      label="Female"
                      id={`Female-${type}`}
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                    />
                  </div>
                ))}
                <Form.Label className="mt-3">Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Phone Number" />
                <Form.Label className="mt-3">Blood Type</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="A+"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeApos"
                  />
                  <Form.Check
                    inline
                    label="A-"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeAneg"
                  />
                  <br />
                  <Form.Check
                    inline
                    label="B+"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeBpos"
                  />
                  <Form.Check
                    inline
                    label="B-"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeBneg"
                  />
                  <br />
                  <Form.Check
                    inline
                    label="O+"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeOpos"
                  />
                  <Form.Check
                    inline
                    label="O-"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeOneg"
                  />
                  <br />
                  <Form.Check
                    inline
                    label="AB+"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeABpos"
                  />
                  <Form.Check
                    inline
                    label="AB-"
                    name="group1"
                    type="checkbox"
                    id="bloodTypeABneg"
                  />
                </div>
                <Form.Label className="mt-3">Do not Resucitate</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type="checkbox"
                  id="rescucitateNO"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="checkbox"
                  id="ResucitateYES"
                />
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
