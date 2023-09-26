import React from "react";
import DogCare from "./DogCare";
import CatCare from "./CatCare";

function PetCare() {
  return (
    <div className='bg'>
      <div>
        <h1>Pet Care Tips for New Pet Owners</h1>
      </div>  
      <div style={{ marginTop:"5px", textAlign:"center" }}>
        <Image style={{ height:"30%", width:"35%" }} src={require('./public/images/Dog1')} thumbnail />
      </div>
      <div style={{ textAlign:"center" }}>
                <Card style={{ 
                    display:'inline-block',
                    border:'2px solid white', 
                    margin: '15px', 
                    backgroundColor:"#8abcdd",
                    width: '50%',
                    padding: '15px'
                  }}>
                    {<DogCare/>}
                </Card>
      </div>
      <div style={{ marginTop:"5px", textAlign:"center" }}>
        <Image style={{ height:"30%", width:"35%" }} src={require('./public/images/Cat1')} thumbnail />
      </div>
      <div style={{ textAlign:"center" }}>
                <Card style={{ 
                    display:'inline-block',
                    border:'2px solid white', 
                    margin: '15px', 
                    backgroundColor:"#8abcdd",
                    width: '50%',
                    padding: '15px'
                  }}>
                    {<CatCare/>}
                </Card>
      </div>
    </div>
  );
};

export default PetCare;
