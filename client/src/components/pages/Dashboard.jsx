import {
  Container,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { RETURN_ONE_CUSTOMER } from "../../utils/queries";
import { useParams } from "react-router";

export default function Dashboard(props) {
  const { userId } = useParams();

  const { data, loading, error } = useQuery(RETURN_ONE_CUSTOMER, {
    variables: { customerId: userId },
  });
  
    
  if (loading) return <h1 style={{ color: "Green " }}> Now Loading!!!</h1>;
  if (error) return <h1 style={{ color: "Red" }}>{error.message}</h1>;
  const customer = data?.customer;
  console.log(data);
  // This renders the patient information page
  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="shadow-lg "
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h1>Customer Information Sheet</h1>
            </Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card
            className="shadow-lg m-2"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h2>Personal Information</h2>
            </Card.Title>
            <Card.Body>
              <div>
                <p>First Name: {customer.firstName}</p>
                <p>Last Name: {customer.lastName}</p>
                <p>Date of Birth: {customer.birthdate}</p>
                <p>Email: {customer.email}</p>
                <p>Gender: {customer.gender}</p>
                <p>Phone Number: {customer.phoneNumber}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card
            className="shadow-lg m-2"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#dfe0e1",
              color: "#0e2743",
            }}
          >
            <Card.Title>
              <h2>Clinical Information</h2>
            </Card.Title>
            <Card.Body>
              <div>
                <p>Blood Type: {customer.bloodType}</p>
                <p>
                  Do not Resuscitate: {customer.doNotResuscitate ? "Yes" : "No"}
                </p>
                <p>Do not Intubate: {customer.doNotIntubate ? "Yes" : "No"}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <h3>Allergies</h3>
            <ul class="nopadding" style={{ listStyle: "none" }}>
              {customer.allergies.map((allergy, index) => (
                <li key={index}>{allergy}</li>
              ))}
            </ul>
            <h2>Emergency Contacts</h2>
            <ul style={{ listStyle: "none" }}>
              {customer.emergencyContacts.map((contact, index) => (
                <li key={index}>
                  First Name: {contact.firstName},<br></br>
                  Last Name: {contact.lastName},<br></br>
                  <div style={{ color: "lime" }}>
                    Phone Number: {contact.phoneNumber}
                  </div>
                </li> */}
      {/* ))}
            </ul> */}
    </Container>
  );
}
