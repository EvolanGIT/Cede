import {Container, Card, Button, Col, Row} from "react-bootstrap";
import ERpic from "../../assets/images/pexels-cottonbro-studio-7579831.jpg"

const Home = () => {
  return (
    <Container className="mt-3 justify-content-right" align="center">
      {/* <h1 style={{color: '#959696'}}>Home Placeholder</h1> */}
      <Row>
        <Col></Col>
        <Col>
          <h1 className="" style={{ marginTop: "1rem", color: "#959696" }}>
            Take Control of Your information
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Card
            style={{
              backgroundColor: "#18313f",
              color: "#959696",
              align: "center",
            }}
          >
            <Card.Body>
              <Card.Text>                
                In an emergency situation, time is of paramount importance. CEDE
                will keep your pertinent information at the ready for you and
                your provider. Join us today!
              </Card.Text>
              <Button
                className=""
                style={{ backgroundColor: "grey", align: "center" }}
              >
                Sign up
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div>
          <img
            style={{
              height: "40vh",
              width: "40vw",
              borderRadius: "1rem",
              opacity: ".70",
              contentFit:"fill"
            
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
