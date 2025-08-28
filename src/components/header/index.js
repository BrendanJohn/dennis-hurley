import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import './header.css'


import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ subtitle }) => (
   <div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Navbar className="padding-right" collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Dennis Hurley</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/reels">
            <Nav.Link>Reels</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/audio">
            <Nav.Link>Audio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cartoon">
            <Nav.Link>Cartoon</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/standup">
            <Nav.Link>Standup</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/impressions">
            <Nav.Link>Impressions</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/bio">
            <Nav.Link>Bio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/press">
            <Nav.Link>Press</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/podcasts">
            <Nav.Link>Podcasts</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sketches">
            <Nav.Link>Sketches</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
);



export default Header;