import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Foster() {
  const [fosters, setFosters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/foster`
      const response = await fetch(URL)
      const data = await response.json()
      setFosters(data)
    }

    fetchData()
  }, [])

  const display = fosters.map(foster => {
    return (
      <div className="wrapper">
        <div style={{ textAlign:"center", display:"flex" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
            <Card.Body>
              <Card.Title>
                <Link to={`/foster/${foster._id}`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>{foster.firstName}</h5>
                </Link>
              </Card.Title>
              <Card.Text>
                <Link to={`/foster`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>Foster Parent: {foster.userName}</h5>
                </Link>
              </Card.Text>
              <Card.Text>
                Email: {foster.emailAddress}
              </Card.Text>
              <Button>
                <Link to={`/foster/update/${foster._id}`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>Edit Profile</h5>
                </Link>
              </Button>
              <Button>
                <Link to={`/newFoster`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>New Profile</h5>
                </Link>
              </Button>
            </Card.Body>
          </Card>
    {/* <Card style={{ width: '18rem' }}>
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
    </div> */}
        </div>
      </div>
    );
  });

  return (
    <div style={{display: "flex"}}>
      {display}
    </div>
  )
}

{/* const Foster = () => { 
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
// }; */}

export default Foster;
  