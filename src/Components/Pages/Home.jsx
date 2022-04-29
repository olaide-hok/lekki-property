import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='vh-100'>
        Home
        <Link to='/addproperty'> Add Property</Link>
        <Link to='/listproperty'> View Property</Link>
      </div>
    </>

  )
}

export default Home