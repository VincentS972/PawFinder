
// const Foster = () => {
//     return (
//       <div className="bg" style={{ textAlign:"center" }}>
//         <h1>This is the foster page!</h1>
//       </div>
//     );
//   };
//   export default Foster;
  

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Foster() {
  return (
    <div className="wrapper">
    <div style={{ textAlign:"center", display:"flex" }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
          Foster's bio
        
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
      <Card.Body>
        <Card.Title>Foster Profile</Card.Title>
        <Card.Text>
          Foster's infos and pets he fosters
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  );
}

// const Foster = () => {
//   const navigate = useNavigate();
//   const [foster, setfoster] = useState(undefined);

//   const { id } = useParams();
//   const URL = `${process.env.REACT_APP_BACKEND_URI}/foster/${id}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setfoster(data);
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

//   const display = foster && (
//     <div className="bg" style={{ textAlign: "center" }}>
//       <div style={{ margin: "auto" }}>
//         <h1>{foster.fosterName}</h1>
//         <img src={foster.fosterPicture} />
//         <p>{foster.emailAddress}</p>
//         <div>
//           <h4>
//             {foster.firstName} {foster.LastName}
//           </h4>
//         </div>

//         <a href={`/foster/update/${id}`}>Update</a>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );

//   return <div>{display}</div>;
// };

export default Foster;
  