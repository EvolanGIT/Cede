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
          <h1
            className=""
            style={{ marginTop: "", margin: "rem", color: "#b6b7b8" }}
          >
            Take Control of Your information
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 6 }}>
          <Card
            style={{
              backgroundColor: "#18313f",
              color: "#b6b7b8",
              align: "center",
              marginBottom: "1rem",
              width: "30rem",
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
                  className=""
                  style={{ backgroundColor: "grey", align: "center" }}
                >
                  Sign up
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div>
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
