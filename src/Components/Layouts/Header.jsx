import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <h1>Lekki Property</h1>
      <button> 
        <Link to='/'>Home</Link>
      </button>

    </nav>
    
  )
}

export default Header