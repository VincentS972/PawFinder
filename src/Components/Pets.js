
//const Pets = () => {
   // return (
     // <div className="bg" style={{textAlign:"center"}} >
     //   <h1>This is the pet page</h1>
     // </div>
   // );
 // };
  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}



  export default card1;
 
  