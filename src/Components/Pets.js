
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
    <div style = {{display: 'flex'}}>
    <Card style={{ width: '20rem' }}>
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
      <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.pdsa.org.uk/media/7888/dalmatian-gallery-outdoors-8-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179483010000000" />
      <Card.Body>
        <Card.Title>Spot</Card.Title>
        <Card.Text>
          Spot is an energetic puppy that loves to play fetch
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dalmatian</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Alex</ListGroup.Item>
        <ListGroup.Item>Age: 1</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg" />
      <Card.Body>
        <Card.Title>Terrance</Card.Title>
        <Card.Text>
          Terrance is a friendly dog looking for a home!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Bulldog</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Vanessa</ListGroup.Item>
        <ListGroup.Item>Age: 1</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://image.petmd.com/files/styles/863x625/public/2022-10/Boxer.jpeg" />
      <Card.Body>
        <Card.Title>Betty</Card.Title>
        <Card.Text>
          Betty is a laid back dog who is great with kids!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Boxer</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Vanessa</ListGroup.Item>
        <ListGroup.Item>Age: 2</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://pethelpful.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTkwODU0Mzc3NTIxNTU1MTI2/shutterstock_1818691745.jpg" />
      <Card.Body>
        <Card.Title>Nick</Card.Title>
        <Card.Text>
          Nick is a friendly dog who loves time in the pool!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Golden Retriever</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Vanessa</ListGroup.Item>
        <ListGroup.Item>Age: 3</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg" />
      <Card.Body>
        <Card.Title>Abby</Card.Title>
        <Card.Text>
          Abby is a fun and playful dog who likes to go on walks!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Chihuahua</ListGroup.Item>
        <ListGroup.Item>Foster Parent: Traci</ListGroup.Item>
        <ListGroup.Item>Age: 4</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"><button>Adopt me!</button></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>






  


   
    </div>
    
   
  );
}

export default card1;
 
  