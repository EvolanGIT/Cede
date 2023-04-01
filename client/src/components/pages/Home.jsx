import {Container, Card, Button, Col, Row} from "react-bootstrap";
import ERpic from "../../assets/images/pexels-cottonbro-studio-7579831.jpg"
import HomePic from "../../assets/images/thumbnail_IMG_0710sm.png"

const Home = () => {
  return (
    <Container className="mt-3 justify-content-right" align="center">
      {/* <h1 style={{color: '#959696'}}>Home Placeholder</h1> */}
      <Row>
        <Col>
          <h1
            className=""
            style={{ marginTop: "8rem", margin: "2rem", color: "#b6b7b8" }}
          >
            Take Control of Your information
          </h1>
        </Col>

        <Col>
          <img
            style={{
              height: "auto",
              maxWidth: "30rem",
              marginBottom: "3rem",
              borderRadius: "1rem",
              opacity: ".70",
              contentFit: "fill",
            }}
            src={HomePic}
            alt=""
          />
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: "#18313f",
              color: "#b6b7b8",
              align: "center",
              margin: "3rem",
              width: "15rem"
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
              height: "auto",
              maxWidth: "70%",
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
