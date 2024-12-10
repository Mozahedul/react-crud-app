import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";

const Heading = () => {
  return (
    <div>
      <Navbar className="mb-4">
        <Container className="bg-light p-2">
          <NavbarBrand href="/">User List</NavbarBrand>
          <Nav className="mb-4">
            <NavItem>
              <Link to="/add" className="btn btn-primary">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
