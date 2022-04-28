import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <p>Copyright &copy; {footerYear} Lekki Property All rights reserved.</p>
  )
}

export default Footer