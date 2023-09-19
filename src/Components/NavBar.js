import Nav from "react-bootstrap/Nav";

function NavBar() {
    return (
        <div style={{ top:"0", position:"sticky", zIndex:"1" }}>
            <Nav style={{ backgroundColor:"lightgrey", fontSize:"40px" }} fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                <Nav.Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/Pets">Our Pets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/Fosters">Our Fosters</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/PetCare">Pet Care</Nav.Link>
                </Nav.Item>
            </Nav>
      </div>
    );
  }

export default NavBar;
