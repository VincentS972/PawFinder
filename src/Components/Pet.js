import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pet() {
  return (

   
    <div style={{ textAlign:"center", display:"flex" }}>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"lightgray" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>random placeholder dog</Card.Title>
        <Card.Text>
          Come adopt this dog because hes super cool!!!
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
    
    </div>
    
  );
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
  