import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center vh-100">
        <h1 className="display-5 fw-bold">Welcome to Lekki Property Inc.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4"> An Online Real Estate Platform, where buyers, sellers, developers, contractors
            can showcase their properties to the world!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to='addproperty'>
              <button className="btn btn-outline-dark btn-lg"> Add Your Property</button>
            </Link>
            <Link to='listproperty'>
              <button className="btn btn-outline-dark btn-lg">View Available Properties</button>
            </Link>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home