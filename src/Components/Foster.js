import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

    fetchData();
  }, []);

  const display = fosters.map(foster => {
    return (
      <div style={{textAlign:"center", display:"flex"}}>
        <Card style={{
          width:"18rem",
          display:"inline-block",
          margin: "5px",
          backgroundColor: "#f2adf7"
        }} key={foster._id}>
          <Card.Img variant="top" src={foster.profilePicture} />
          <Card.Body>
            <Card.Title>
              <Link to={`/foster/${foster._id}`} style={{textDecoration:'inherit'}}>
                <h5 style={{textAlign:'center', marginTop: '8px', color:'#c20ecf'}}>{foster.firstName}</h5>
              </Link>
            </Card.Title>
            <Card.Text>
                <h5 style={{textAlign:'center', marginTop: '8px', color:'black'}}>{foster.userName}</h5>
            </Card.Text>
            <Card.Text>
              Email: {foster.emailAddress}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div style={{display: "flex"}}>
      {display}
    </div>
  )
}

export default Foster;
  