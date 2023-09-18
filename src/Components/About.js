 

// const About = () => {
//     return (
//       <div className="bg" style={{ textAlign:"center" }} >
//         <h1>This is the About page</h1>
//       </div>
//     );
//   };
//   export default About;
  
import NavigationBar from './Navbar';
import Card from 'react-bootstrap/Card';
import MissionStatement from './MissionStatement';

function About() {
    return (
        <div className='container-lg font-nice'>
            {<NavigationBar/>}
            <div  style={{position:'relative'}}>
                <img
                src="https://unsplash.com/photos/N_G2Sqdy9QY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                alt="Woman with cat"
                className="object-fit-cover img-fluid m0"
                />
                <div className='p-2' style={{
                position:'absolute', 
                bottom:'0px', 
                zIndex:'1', 
                marginLeft: 'auto', 
                marginRight:'auto', 
                width:'100%', 
                textAlign: 'center', 
                color:'black', 
                backgroundColor:'rgb(255,255,255, 0.5)'}}>
                Photo by <a href="https://unsplash.com/@bto16180?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Humberto Arellano</a> on <a href="https://unsplash.com/photos/N_G2Sqdy9QY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <div style={{
                width:'100%',
                margin:'auto', 
                textAlign:'center', 
                backgroundColor:'#B5EB8D',
                backgroundImage: 'repeating-linear-gradient(30deg, #ffffff 0, #ffffff 1px, #a7e57b 0, #a7e57b 2%)'
            }}>
                <Card style={{ 
                    display:'inline-block',
                    border:'2px solid #217605', 
                    margin: '15px', 
                    backgroundColor:"#217605",
                    width: '70%',
                    padding: '15px'
                }}>
                    {<MissionStatement/>}
                </Card>
            </div>
        </div>
    )
}

export default About