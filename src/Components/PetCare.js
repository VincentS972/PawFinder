import React from "react";
import DogCare from "./DogCare";
import CatCare from "./CatCare";
import { Card, Container, Row, Col } from "react-bootstrap"; 

function PetCare() {
  return (
    <div>
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
              <div style={{ textAlign: "center" }}>
                <Image style={{ height: "70%", width: "75%" }} src={require('./Dog1.jpg')} thumbnail />
              </div>
              <br></br>
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
              <div style={{ textAlign: "center" }}>
                <Image style={{ height: "80%", width: "85%" }} src={require('./Cat1.jpg')} thumbnail />
              </div>
              <br></br>
              <CatCare />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PetCare;