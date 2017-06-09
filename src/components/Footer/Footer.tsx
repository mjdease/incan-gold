import * as React from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-inverse text-white">
      <Container>
        <Nav className="footer-links">
          <NavItem>
            <NavLink href="https://github.com/mjdease/incan-gold" target="_blank">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;