import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
// import CardGroup from "react-bootstrap/CardGroup";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"; 
import BackgroundImagePage from "./BackgroungImagePage";


const Home = () => {

    return (
    <div className="bg">
      {/* <Container style={{ textAlign: "center" }}>
        <Row>
          <CardGroup fluid style={{ position:"relative" }}>
            <Card style={{ background:"transparent " }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }}>
                <Card.Link style={{ color: 'red', textDecoration: 'inherit' }} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent " }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent " }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>
                Pet's Name
                </Card.Title>
                <Card.Text>
                This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer >
            </Card>

            <Card style={{ background:"transparent " }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                Pet's profile link {" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: " black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card style={{ background:"transparent" }} >
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Pet's Name</Card.Title>
                <Card.Text>
                 This is a pet profile
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background:"lightgray" }} >
                <Card.Link style={{ color: 'red', textDecoration: 'inherit'}} href="/pets">
                  Pet's profile link{" "}
                </Card.Link>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Container> */}

<Row xs={1} md={2} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ background:"transparent" }} >
            <Card.Img variant="top" src="./b-g.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>
  );
};

export default Home;