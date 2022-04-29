import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function Header() {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand > <h1>Lekki Property Inc. </h1> </Navbar.Brand>
        <Nav className="me-2 justify-content-end">
          
            <Link to='/' className='text-white text-decoration-none'>Home</Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header