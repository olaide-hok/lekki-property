import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='vh-100  '>
        Home
        <h3> <Link to='/addproperty' className='text-black text-decoration-none'> Add Property</Link> </h3>
        <h3> <Link to='/listproperty' className='text-black text-decoration-none'> View Property</Link> </h3>
      </div>
    </>

  )
}

export default Home