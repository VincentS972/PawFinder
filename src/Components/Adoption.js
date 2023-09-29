import React from "react";
import { Card, Image } from "react-bootstrap";
import AdoptionForm from "./AdoptionForm"; // Import the AdoptionForm component

function Adoption() {
  return (
    <div className="bg">
      <div style={{ marginTop: "5px", textAlign: "center" }}>
        <Image style={{ height: "30%", width: "35%" }} src={require('./AdoptDog.jpg')} thumbnail />
      </div>
      <div style={{ textAlign: "center" }}>
        <Card style={{
          display: 'inline-block',
          border: '2px solid white',
          margin: '15px',
          backgroundColor: "#8abcdd",
          width: '50%',
          padding: '15px'
        }}>
          <AdoptionForm /> {/* Render the AdoptionForm component */}
        </Card>
      </div>
    </div>
  );
}

export default Adoption;
