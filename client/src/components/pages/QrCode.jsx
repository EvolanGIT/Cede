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
      <Col>
        <Card>
          <p>Scan My QR Code</p>
          <QRCodeCanvas value= {`https://cede-qr-app.herokuapp.com/dashboard/${userId}`} /> bookmark this page
          for your convinience
        </Card>
      </Col>
      {/* here the "value" is the prop. You can give any link here. */}
    </Container>
  );
};

export default QrCode;
