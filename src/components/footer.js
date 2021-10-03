import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function Footer() {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>

        <Nav className="me-auto">
          <Nav.Link href="#home">© 2021 Alaa Nasser Smadi</Nav.Link>
          <Nav.Link href="#features">Lab 36</Nav.Link>
          
        </Nav>
        
        
      </Container>
    </Navbar>

  );
}

