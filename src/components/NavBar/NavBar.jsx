import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { getCategorias } from '../../asyncmock';
import { useEffect, useState } from 'react';
const NavBar = () => {
  const [ categories, setCategories ] = useState(null)
  
  
  useEffect(() => {

    getCategorias()
      .then(res => setCategories(res))
      .catch(error => console.error(error))
  }, [])

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Woohoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {categories && categories.map((category) => { 
              return <Nav.Link key={category} href={'/categoria/' + category}>{category}</Nav.Link>
            })}
            <div className="right desktop"><CartWidget/></div>
            <div className="mobile"><CartWidget/></div>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar