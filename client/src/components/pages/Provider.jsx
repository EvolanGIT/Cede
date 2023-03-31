import Container from "react-bootstrap/Container";
import { useQuery } from "@apollo/client";
import { RETURN_ALL_CUSTOMERS } from "../../utils/queries";
import Card from "react-bootstrap/Card";
import Auth from "../../utils/auth";

const Provider = () => {
  const { loading, data } = useQuery(RETURN_ALL_CUSTOMERS);
  //   if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //     return <Navigate to="/Provider" />;
  //   }
  if (loading) {
    return <div>Loading...</div>;
  }
  const entries = Object.entries(data)
    return (
      <Container>
        {entries.map((customer) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                {console.log(entries)}
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
};

export default Provider;
