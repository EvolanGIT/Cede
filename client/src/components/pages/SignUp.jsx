import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//creating a comment

const SignUp = () => {
  const style = {
    control: { width: "25rem" },
  };
  const [gender, setGender] = useState("");
  const [bloodType, setBlodType] = useState("");
  const [doNotResuscitate, setDoNotResuscitate] = useState("");
  return (
    <Container className="mt-3 justify-content-center" align="center">
      <Card className="shadow-lg" style={{ width: "40rem", backgroundColor: '#0e385c', color:'#959696' }}>
        <Form>
          <Form.Group className="mx-4 text-start" controlId="formEmailSignUp">
            <Form.Label className="mt-3">First Name</Form.Label>
            <Form.Control
              style={style.control}
              type="text"
              placeholder="Enter first name"
            />
            <Form.Label className="mt-3">Last Name</Form.Label>
            <Form.Control
              style={style.control}
              type="text"
              placeholder="Enter last name"
            />
            <Form.Label className="mt-3">Email address</Form.Label>
            <Form.Control
              style={style.control}
              type="email"
              placeholder="Enter email"
            />
            <Form.Label className="mt-3">Password</Form.Label>
            <Form.Control
              style={style.control}
              type="password"
              placeholder="Password"
            />
            <Form.Label className="mt-3">Sex</Form.Label>
            {["checkbox"].map((type) => (
              <div className="mb-3">
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
            <Form.Control
              style={style.control}
              type="phone"
              placeholder="Enter your Phone Number"
            />
            <Form.Label className="mt-3">Blood Type</Form.Label>
            <div>
              <Form.Check
                inline
                label="A+"
                name="group1"
                type="checkbox"
                id="bloodTypeApos"
                checked={bloodType === "A+"}
                onChange={() => setBlodType("A+")}
              />
              <Form.Check
                inline
                label="A-"
                name="group1"
                type="checkbox"
                id="bloodTypeAneg"
                checked={bloodType === "A-"}
                onChange={() => setBlodType("A-")}
              />
              <br />
              <Form.Check
                inline
                label="B+"
                name="group1"
                type="checkbox"
                id="bloodTypeBpos"
                checked={bloodType === "B+"}
                onChange={() => setBlodType("B+")}
              />
              <Form.Check
                inline
                label="B-"
                name="group1"
                type="checkbox"
                id="bloodTypeBneg"
                checked={bloodType === "B-"}
                onChange={() => setBlodType("B-")}
              />
              <br />
              <Form.Check
                inline
                label="O+"
                name="group1"
                type="checkbox"
                id="bloodTypeOpos"
                checked={bloodType === "O+"}
                onChange={() => setBlodType("O-")}
              />
              <Form.Check
                inline
                label="O-"
                name="group1"
                type="checkbox"
                id="bloodTypeOneg"
                checked={bloodType === "O-"}
                onChange={() => setBlodType("O-")}
              />
              <br />
              <Form.Check
                inline
                label="AB+"
                name="group1"
                type="checkbox"
                id="bloodTypeABpos"
                checked={bloodType === "AB+"}
                onChange={() => setBlodType("AB+")}
              />
              <Form.Check
                inline
                label="AB-"
                name="group1"
                type="checkbox"
                id="bloodTypeABneg"
                checked={bloodType === "AB-"}
                onChange={() => setBlodType("AB-")}
              />
            </div>
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
                checked={doNotResuscitate === "Yes"}
                onChange={() => setDoNotResuscitate("Yes")}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type="checkbox"
                id="resuscitateYES"
                checked={doNotResuscitate === "No"}
                onChange={() => setDoNotResuscitate("No")}
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
    </Container>
  );
};

export default SignUp;
