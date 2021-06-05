import { Navbar, Nav,  NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky="top" className="my-3">
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              alt="aditi enterprise logo"
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <b>Aditi Enterprise</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Form className="form-inline mr-md-4 d-block d-md-none ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#home">About us</Nav.Link>
            <NavDropdown title="language" id="alter-website-language">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Japanese
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Today's arrival: <b>55</b></Nav.Link>
            <Nav.Link href="#features">Stocks: <b>220</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
