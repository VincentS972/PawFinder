import Image from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';
import MissionStatement from './MissionStatement'

function About() {
  return (
    <div className='bg'>
      <div style={{ marginTop:"5px", textAlign:"center" }}>
       <Image style={{ height:"30%", width:"35%" }} src={require('./Woman&cat.jpg')} thumbnail />
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
                    {<MissionStatement/>}
                </Card>
            </div>
     </div>
  );
};

export default About;



// const About = () => {
//   return (
//     <div className="bg">
//       <div style={{ textAlign:"center" }}>
//         <img  
//           src="./Components/Woman-&-cat.jpg"
//           alt="Woman with cat"
//           className="object-fit-cover img-fluid m0"
//         /> 
//       </div>
//     </div>
//   );
// };

// export default About;