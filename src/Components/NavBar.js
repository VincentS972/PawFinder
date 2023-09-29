import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div style={{ top:"0", position:"sticky", zIndex:"1" }}>
            <Nav className="justify-content-center" style={{ backgroundColor:"#8abcdd", fontSize:"40px" }}  defaultActiveKey="/home">
                    <Navbar className="bg-body-tertiary">
                    <Container>
                      <Navbar.Brand href="/">
                        <img
                          alt=""
                          src="./images/PawFinderLogo.png"
                          width="50"
                          height="50"
                          className="d-inline-block align-top"
                        />
                      </Navbar.Brand>
                    </Container>
                  </Navbar>
                <Nav.Item >
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit' }} href="/">Home</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit'}} href="/Pet">Our Pets</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit'}} href="/Foster">Our Fosters</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit'}} href="/PetCare">Pet Care</Nav.Link>
                 </Nav.Item>
                 <Nav.Item >
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit' }} href="/About">About</Nav.Link>
                 </Nav.Item>
                 <Nav.Item >
                 <Nav.Link style={{ color: 'white', textDecoration: 'inherit' }} href="/Adoption">Adopt</Nav.Link>
                 </Nav.Item>
           </Nav>
       </div>
    );
  }

export default NavBar;