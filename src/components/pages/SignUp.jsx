import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SignUp = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Card className="shadow-lg">
            <Form>
              <Form.Group className="mx-4 text-start" controlId="formEmailSignUp">
                <Form.Label className="mt-3">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mx-4 m-3 text-start" controlId="formPasswordSignUp">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
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
