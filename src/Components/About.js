import Card from 'react-bootstrap/Card';
import MissionStatement from './MissionStatement';

function About() {
    return (
      <div className='bg'>
        <div>
            <div style={{ textAlign:"center"}}>
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
                }}>
                Photo by <a href="https://unsplash.com/@bto16180?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Humberto Arellano</a> on <a href="https://unsplash.com/photos/N_G2Sqdy9QY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <div style={{ textAlign:"center" }}>
                <Card style={{ 
                    display:'inline-block',
                    border:'2px solid black', 
                    margin: '15px', 
                    backgroundColor:"transparent",
                    width: '70%',
                    padding: '15px'
                  }}>
                    {<MissionStatement/>}
                </Card>
            </div>
        </div>
       </div>
    )
}

export default About;