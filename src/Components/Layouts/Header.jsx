import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function Header() {
  return (
    // <nav>
    //   <h1>Lekki Property</h1>
    //   <button> 
    //     <Link to='/'>Home</Link>
    //   </button>

    // </nav>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand > <h1>Lekki Property Inc. </h1> </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header