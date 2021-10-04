import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { connect } from 'react-redux';

function Header(props) {
  return (
    

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  href="#home"> Alaa Lab 37 </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link onClick={() => { props.show() }} >🛒{props.cart.length}</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

function mapStateToProps(state){
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
