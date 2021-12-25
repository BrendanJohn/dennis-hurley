
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ subtitle }) => (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">Dennis Hurley</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
        <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
        <NavDropdown.Item href="/headshots">Headshots</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/reels">Reels</NavDropdown.Item>
        <NavDropdown.Item href="/audio">Audio</NavDropdown.Item>
        <NavDropdown.Item href="/cartoon">Cartoon</NavDropdown.Item>
        <NavDropdown.Item href="/standup">Standup</NavDropdown.Item>
        <NavDropdown.Item href="/impressions">Impressions</NavDropdown.Item>
        <NavDropdown.Item href="/bio">Bio</NavDropdown.Item>
        <NavDropdown.Item href="/press">Press</NavDropdown.Item>
        <NavDropdown.Item href="/podcasts">Podcasts</NavDropdown.Item>
        <NavDropdown.Item href="/sketches">Sketches</NavDropdown.Item>
        <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
        <NavDropdown.Item href="/charity">Charity</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);



export default Header;