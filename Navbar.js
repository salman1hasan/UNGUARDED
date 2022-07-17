import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import {Button,Container,Form,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ug from '../pages/images/ug.png'
import './Navbar.css'
import { FaHome } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FaUpload } from 'react-icons/fa'
import { FaMoneyBill} from 'react-icons/fa'



function NavScrollExample() {
  return (   
    <Navbar sticky="top" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/Home"> <img
              src={ug}
              width="40"
              height="40"
              alt=""
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link} className="inactive" to="/Home"><FaHome size='1.2rem'/>HOME</Nav.Link>
            <Nav.Link as={Link} className="inactive" to="/Content"><FaVideo size='1.2rem'/>CONTENT</Nav.Link>
            <Nav.Link as={Link} className="inactive" to="/Upload"><FaUpload size='1.2rem'/>UPLOAD</Nav.Link>
            <Nav.Link as={Link} className="inactive" to="/Bank"><FaMoneyBill size='1.2rem'/>BANK</Nav.Link>
         
          </Nav>
          <Form className="d-flex">
          <Link to="/signup">
          <Button className="button">SIGNUP</Button>
          </Link>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="button1">SEARCH</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default NavScrollExample;