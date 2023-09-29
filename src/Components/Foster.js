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
    <div className="bg" style={{display: "flex"}}>
      <Button>
        <Link to={`/newFoster`} style={{color:'blue'}}>
          <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>New Profile</h5>
        </Link>
      </Button>
      {display}
    </div>
  )
}

export default Foster;
  