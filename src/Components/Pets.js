
//const Pets = () => {
   // return (
     // <div className="bg" style={{textAlign:"center"}} >
     //   <h1>This is the pet page</h1>
     // </div>
   // );
 // };
  //import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';



import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <Card.Body>
        <Card.Title>Juno</Card.Title>
        <Card.Text>
          Juno is a fun and playful dog who likes belly rubs!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>French Bulldog</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Alex</ListGroup.Item>
        <ListGroup.Item>Age: 3</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Adopt me!</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default card1;
 
  