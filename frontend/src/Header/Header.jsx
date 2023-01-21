import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="navbar_heads">
          {/* <div style={{ border: "2px solid red" }}> */}
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            StoreNotes
          </Link>
          {/* </div> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScrollSW
          >
            <NavDropdown
              style={{ textDecoration: "none", color: "white" }}
              title="ronrev"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {/* <div style={{ border: "2px solid red" }}> */}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/mynotes"
              >
                {" "}
                My Notes
              </Link>
              {/* </div> */}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
