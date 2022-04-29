import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='text-center'>
        <p className='text-white'>Copyright &copy; {footerYear} Lekki Property Inc. All rights reserved.</p>
      </Container>
    </Navbar>

  )
}

export default Footer