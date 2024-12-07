import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import looo from '../../asset/looo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './nav.css'
import { Link } from 'react-router-dom';

import {  faArrowLeft, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
const Navv = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
          <img alt="home"
          src={looo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">Home</Link>
            
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">about us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">our team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">faqs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">login/ register </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">detalis</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="blog" id="basic-nav-dropdown">
              <Link to="/blogs">blogs</Link>
              <NavDropdown.Item href="#action/3.1">blog detaild</NavDropdown.Item>
             
            </NavDropdown>
            <Link to="/contact">contact us</Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSearch}/></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faPhone}/>389247924</Nav.Link>
            <Nav.Link href="#link">
                <button>contact us <span> <FontAwesomeIcon icon={faArrowLeft}/> </span></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navv;
