import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { productos } from '../../asyncmock';
import { useFirebase } from '../../services/config';


const NavBar = () => {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    if (useFirebase) {
      const misProductos = query(collection(db, "inventario"));
      getDocs(misProductos)
        .then(async res => {
          const productos = res.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
          });
          return productos;
        })
        .then(productos => {
          const categories = productos.map((producto) => {
            return producto.categoryName;

          })
          return categories;
        })
        .then(categoriesWithReps => {
          let result = categoriesWithReps.filter((item, index) => {
            return categoriesWithReps.indexOf(item) === index;
          })
          setCategories(result);
        })
        .catch(error => console.log(error))
    }
    }, [])

  useEffect(() => {
    if (!useFirebase) {
      const categoriesWithReps = productos.map((producto) => {
        return producto.categoryName;

      })
      let result = categoriesWithReps.filter((item, index) => {
        return categoriesWithReps.indexOf(item) === index;
      })
      setCategories(result);
    }
  }, [])
  
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brandColored">
          <NavLink to="/">Woohoo</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            {categories?.length > 0 && categories.map((category) => { 
              return <NavLink to={`/categories/${category}`}>{category}</NavLink>
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