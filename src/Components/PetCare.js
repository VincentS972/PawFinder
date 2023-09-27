import React from "react";
import DogCare from "./DogCare";
import CatCare from "./CatCare"; 
import { Card, Container, Row, Col } from "react-bootstrap"; 

function PetCare() {
  return (
    <div className="bg">
      <div className="text-center">
        <h1>Pet Care Tips for New Pet Owners</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                border: "2px solid white",
                backgroundColor: "#8abcdd",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <DogCare />
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                border: "2px solid white",
                backgroundColor: "#8abcdd",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <CatCare />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PetCare;
