"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  HouseDoorFill,
  Search,
  PersonFill,
  CartFill,
} from "react-bootstrap-icons";

// Top Navbar
const TopMenu = () => {
  return (
    <Navbar bg="light" expand className="py-2">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#" className="p-1 text-dark">
            <Facebook />
          </Nav.Link>
          <Nav.Link href="#" className="p-1 text-dark">
            <Twitter />
          </Nav.Link>
          <Nav.Link href="#" className="p-1 text-dark">
            <Pinterest />
          </Nav.Link>
          <Nav.Link href="#" className="p-1 text-dark">
            <Instagram />
          </Nav.Link>
        </Nav>

        <Nav className="justify-content-end align-items-center">
          <Nav.Link href="#" className="p-1 text-dark">
            <HouseDoorFill />
          </Nav.Link>
          <Nav.Link href="#" className="p-1 text-dark">
            <Search />
          </Nav.Link>
          <Nav.Link href="#" className="p-1 text-dark">
            <PersonFill />
          </Nav.Link>
          <NavDropdown
            title={
              <span className="text-dark">
                <CartFill /> 0
              </span>
            }
            id="cart-dropdown"
            align="end"
            className="p-1"
          >
            <NavDropdown.ItemText>Your cart is empty</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Snow Island Logo
const SnowIslandLogo = () => (
  <Row>
    <Col>
      <img
        src="/snowislandlogo.png"
        className="img-fluid rounded mx-auto d-block py-1"
        alt="Snow Island Logo"
      />
    </Col>
  </Row>
);

// Middle Menu
const MiddleMenu = () => (
  <Row className="justify-content-center pt-4">
    <Col xs={1} className="text-center">
      <NavDropdown title={<strong>MEN</strong>} id="men-dropdown">
        <NavDropdown.ItemText>Items</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col xs={1} className="text-center">
      <NavDropdown title={<strong>WOMEN</strong>} id="women-dropdown">
        <NavDropdown.ItemText>Items</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col xs={1} className="text-center">
      <NavDropdown title={<strong>KIDS</strong>} id="kids-dropdown">
        <NavDropdown.ItemText>Items</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col xs={1} className="text-center">
      <NavDropdown title={<strong>BRANDS</strong>} id="brands-dropdown">
        <NavDropdown.ItemText>Items</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col xs={1} className="text-center">
      <strong>SEARCH</strong>
    </Col>
  </Row>
);

// Full Width Background Image
const FullWidthBackgroundImage = () => (
  <Row className="justify-content-center">
    <Col>
      <img
        src="/snowislandbridge.png"
        className="img-fluid w-100"
        alt="Snow Island Bridge"
      />
    </Col>
  </Row>
);

// Footer
const FooterMenu = () => (
  <footer>
    <Container>
      <Row>
        <Col md={4}>
          <h5>NAVIGATION</h5>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>

        <Col md={4}>
          <h5>MAIN MENU</h5>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>

        <Col md={4}>
          <h5>CONNECT</h5>
          <hr />
          <div className="mb-2">Sign up for the latest updates</div>
          <div className="d-flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn-join" type="button">Join</button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Default Export
export default function Home() {
  return (
    <main>
      <TopMenu />
      <SnowIslandLogo />
      <MiddleMenu />
      <FullWidthBackgroundImage />
      <FooterMenu />
    </main>
  );
}