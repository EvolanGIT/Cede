import {Card, Container, Row, Col} from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";



const QrCode = () => {
  return (
    <Container>
      <Col>
        <Card>
          <p>Scan My QR Code</p>
          <QRCodeCanvas value="localhost:3000/dashboard" /> bookmark this page
          for your convinience{" "}
        </Card>
      </Col>
      {/* here the "value" is the prop. You can give any link here. */}
    </Container>
  );
};

export default QrCode