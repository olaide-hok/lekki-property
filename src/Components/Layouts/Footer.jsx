import React from 'react'


function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    
      <footer className='bg-dark justify-content-center text-white p-4 bg-gradient'>
        <p className='text-center'>Copyright &copy; {footerYear} Lekki Property Inc. All rights reserved.</p>
      </footer>
    

  )
}

export default Footer