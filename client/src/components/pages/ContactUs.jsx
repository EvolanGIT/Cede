import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";

const ContactUs = () => {
 

  return (
    <Container className="mt-3 contact-container" align="center">
      <Row>
        <center>
          <Col sm={10} md={6}>
            <Card
              className="shadow-lg"
              style={{
                backgroundColor: "#112a48",
                color: "#959696",
              }}
            >
              <Form
                target="_blank"
                action="https://formsubmit.co/b354e66fe4ddf916638ae489cc98543b"
                method="POST"
              >
                <Form.Group
                  className="mx-4 text-start"
                  controlId="formContactUs"
                >
                  <Form.Label className="mt-3">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mx-4 text-start" controlId="formEmail">
                  <Form.Label className="mt-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    required
                  />
                </Form.Group>
                <Form.Group className="mx-4 text-start" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    name="message"
                    rows={4}
                    required
                  />
                </Form.Group>
                <Button
                  style={{ background: "#dfe0e1" }}
                  variant="light"
                  type="submit"
                  className="m-3"
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </center>
      </Row>
    </Container>
  );
};    

export default ContactUs;
