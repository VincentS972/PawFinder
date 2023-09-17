import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* <Navbar.Brand href="/">
          <img
            alt=""
            src="./icon.ico"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Profile">Our Pets</Nav.Link>
            <Nav.Link href="/Forum">Our Fosters</Nav.Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="TBD">
                W3 School
              </NavDropdown.Item>
              <NavDropdown.Item href="TBD">
                MozillaDev
              </NavDropdown.Item>
              <NavDropdown.Item href="TBD">
                stackoverflow
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button
              variant="outline-success"
              style={{
                borderColor: "#564256",
                color: "#564256",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
