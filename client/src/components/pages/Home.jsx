import {Container, Card, Button, Col, Row} from "react-bootstrap";
import ERpic from "../../assets/images/pexels-cottonbro-studio-7579831.jpg"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Container className="mt-3 justify-content-right" align="center">
      {/* <h1 style={{color: '#959696'}}>Home Placeholder</h1> */}
      <Row>
        <Col></Col>
        <Col>
          <h1 className="" style={{ margin: ".25rem", color: "#dfe0e1" }}>
            Take Control of Your information
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 4 }}>
          <Card
            style={{
              height: "auto",
              maxWidth: "75%",
              backgroundColor: "#18313f",
              color: "#dfe0e1",
              align: "center",
              marginBottom: "1rem",
            }}
          >
            <Card.Body>
              <Card.Text>
                In an emergency situation, time is of paramount importance. CEDE
                will keep your pertinent information at the ready for you and
                your provider. Join us today!
              </Card.Text>
              <Link to="/signup">
                <Button
                  style={{ background: "#dfe0e1" }}
                  variant="light"
                  type="submit"
                  className="mb-1"
                >
                  Sign up
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="mb-1">
          <img          
            style={{
              height: "auto",
              maxWidth: "40%",
              borderRadius: "1rem",
              opacity: ".70",
              contentFit: "fill",
            }}
            src={ERpic}
            alt=""
          />
        </div>
      </Row>
    </Container>
  );
};

export default Home;
