import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

 const activeStyle={
    fontWeight: "bold",
    color: "red"
  }
    return (
<Navbar bg="light" expand="lg" className="fixed-top">
  <Container>
    <Navbar.Brand href="#" className="fs-3 fw-bold text-info"><span><i className="fas fa-book-reader "></i></span> Language School</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{" maxHeight": '100px' }}
        navbarScroll
      >
        <NavLink activeStyle={activeStyle} className="me-2 text-decoration-none fw-bolder" to="/home"> Home</NavLink>
        <NavLink activeStyle={activeStyle} className="me-2 text-decoration-none fw-bolder" to="/about"> About</NavLink>
        <NavLink activeStyle={activeStyle} className="me-2 text-decoration-none fw-bolder" to="/services">Services</NavLink>
        <NavLink activeStyle={activeStyle} className="me-2 text-decoration-none fw-bolder" to="/admission">Admission</NavLink>
        <NavLink activeStyle={activeStyle} className="me-2 text-decoration-none fw-bolder" to="/notfound">404 Page</NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;