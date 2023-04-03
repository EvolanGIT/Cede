import { Container, Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import auth from "../../utils/auth"
import { RETURN_ONE_CUSTOMER } from "../../utils/queries";
import { Navigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const { customerId } = useParams();
  const { loading, data } = useQuery(RETURN_ONE_CUSTOMER, {
    variables: { customerId: customerId },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (auth.loggedIn() && auth.getProfile().data._id === customerId) {
    return <Navigate to="/Dashboard" />;
  }
  const customer = data?.customer;
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{customer.firstName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
