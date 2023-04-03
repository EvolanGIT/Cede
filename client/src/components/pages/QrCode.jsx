import { Card, Container, Row, Col } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";
import { useState, useEffect } from "react";

const QrCode = () => {
  const [userId, setuserId] = useState("");
  useEffect(() => {
    return setuserId(localStorage.getItem("_id"));
  }, []);
  console.log(userId);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Scan My QR Code</Card.Title>
              <Card.Text>
                <QRCodeCanvas
                  value={`https://cede-qr-app.herokuapp.com/dashboard/${userId}`}
                />{" "}
              </Card.Text>
              Bookmark this page for your convenience
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      {/* here the "value" is the prop. You can give any link here. */}
    </Container>
  );
};

export default QrCode;
