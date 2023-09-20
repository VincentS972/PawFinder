import { NavbarBrand } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div style={{ top:"0", position:"sticky", zIndex:"1" }}>
            <Nav className="justify-content-center" style={{ backgroundColor:"lightgrey", fontSize:"40px" }}  defaultActiveKey="/home">
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

//   return (
//     <>
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">Brand link</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand>Brand text</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="/img/logo.svg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="./images/PawFinderLogo.png"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             React Bootstrap
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

export default NavBar;
