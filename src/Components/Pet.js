import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pet() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])

  const display = pets.map(pet => {
    return (
      <div style={{ textAlign:"center", display:"flex" }}>
      <Card style={{ 
        width: '18rem',
        display: 'inline-block',
        margin: '5px',
      }} key={pet._id}>
        <Card.Img variant="top" src={pet.profilePicture} />
        <Card.Body>
          <Card.Title>{pet.petName}</Card.Title>
          <Card.Text>
            {pet.petBio}
          </Card.Text>
          <Link to={`/new`} style={{color:'blue'}}>
            <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>New Pet</h5>
          </Link>
          <Link to={`/pets/${pet._id}`} style={{color:'blue'}}>
            <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>Pet Info</h5>
          </Link>
          {/* <Button variant="primary">Adopt Me</Button> */}
        </Card.Body>
      </Card>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>random placeholder dog</Card.Title>
          <Card.Text>
            Come adopt this dog because hes super cool!!!
          </Card.Text>
          <Button variant="primary">Adopt Me</Button>
        </Card.Body>
      </Card> */}
      </div>
    );
  });

  return (
    <div className="">
      {display}
    </div>
  )
}

// const Pet = () => {
//   const navigate = useNavigate();
//   const [pet, setPet] = useState(undefined);

//   const { id } = useParams();
//   const URL = `${process.env.REACT_APP_BACKEND_URI}/pet/${id}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setPet(data);
//     };
//     fetchData();
//   }, [id, URL]);

//   //deletes the current profile from database
//   const handleDelete = async (e) => {
//     const response = await fetch(URL, {
//       method: "delete",
//     });
//     if (response.status !== 204) console.log("error");
//     navigate("/");
//   };

//   const display = pet && (
//     <div className="bg" style={{ textAlign: "center" }}>
//       <div style={{ margin: "auto" }}>
//         <h1>{pet.petName}</h1>
//         <img src={pet.petPicture} />
//         <div>
//           <h4>
//             {pet.petName} {pet.fosterName}
//           </h4>
//         </div>

//         <a href={`/pet/update/${id}`}>Update</a>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );

//   return <div className="bg" >{display}</div>;
// };

export default Pet;
  