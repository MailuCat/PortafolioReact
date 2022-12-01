import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Navegador() {

        return ( 
          <>
              <Navbar expand="lg" >
                  <Container>
                    <Navbar.Brand href="/">María Luisa Catalán</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Link to="/about">Sobre mi</Link>
                        <Link to="/proyectos">Mis proyectos</Link>
                        <Link to="/contacto">Contacto</Link>
                        <p className="margin_icons"> <BsLinkedin/></p>
                        <p className="margin_icons"><BsGithub/></p>
                     </Nav>
                   </Navbar.Collapse>
                 </Container>
              </Navbar> 
          </>  
         );
         
    }
    
 
