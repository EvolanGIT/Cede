import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Login = () => {
  return (
    <Container className="mt-3" align="center">
          <Card className="shadow-lg" style={{backgroundColor: '#0e385c', color:'#959696', width: '25rem'}}>
            <Form>
              <Form.Group className="mx-4 text-start" controlId="formLogin">
                <Form.Label className="mt-3">Login</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mx-4 m-3 text-start"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  placeholder="Password" />
              </Form.Group>
              <Button variant="dark" type="submit" className="mb-3">
                Login
              </Button>
            </Form>
          </Card>
    </Container>
  );
};

export default Login;
