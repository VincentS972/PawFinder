import Image from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';
import AdoptionForm from './AdoptionForm';

function Adoption() {
  return (
    <div className='bg'>
      <div style={{ marginTop:"5px", textAlign:"center" }}>
       <Image style={{ height:"30%", width:"35%" }} src={require('./AdoptDog.jpg')} thumbnail />
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
                    {<AdoptionForm/>}
                </Card>
            </div>
     </div>
  );
};

export default Adoption;