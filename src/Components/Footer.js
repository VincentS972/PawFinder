import { Card, Container } from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    
    <Container style={{ justifyContent:"center", width:"100%" }} >
   <div style={{ width:"100%", bottom:"0", position:"static", textAlign:"center", backgroundColor: "#8abcdd" }} >
      <h4 style={{ color: "white", textAlign: "center", marginBottom: "10px" }}>
        Follow us on Social Media !
      </h4>
      <div>
        <ul className="ul">
          <li>
            <p>
              <a href="/About">About Us</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/About">Contact Us</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/NewFoster">Become A Foster</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/About">Newsletter</a>
            </p>
          </li>
        </ul>
      </div>
      <div style={{ color:"white" }}>
        <p> Copyright © 2023 | PawFinder</p>
      </div>
      </div>
    </Container>
   
  );
};

export default Footer;
