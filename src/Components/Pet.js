import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

    fetchData();
  }, []);

  const display = pets.map(pet => {
    return (
        <div style={{ textAlign:"center"}}>
          <Card style={{ 
            width: '18rem',
            display: 'inline-block',
            margin: '5px',
            backgroundColor: '#f2adf7'
          }} key={pet._id}>
            <Card.Img variant="top" src={pet.profilePicture} />
            <Card.Body>
              <Card.Title>
                <Link to={`/pet/${pet._id}`} style={{textDecoration:'inherit'}}>
                  <h5 style={{textAlign:'center', marginTop: '8px', color:'#c20ecf'}}>{pet.petName}</h5>
                </Link>
              </Card.Title>
              <Card.Text>
                <h5 style={{textAlign:'center', marginTop: '8px', color:'black'}}>Foster Parent: {pet.fosterName}</h5>
              </Card.Text>
              <Card.Text>
                Bio: {pet.petBio}
              </Card.Text>
              <Button href="/Adoption" variant="light">
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'#8abcdd'}}>Adopt</h5>
              </Button>
            </Card.Body>
          </Card>
        </div>
    );
  });

  return (
    <div className="wrapper">
      {display}
    </div>
  );
}

export default Pet;
  