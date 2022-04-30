import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
    return (
        <div className="px-4 py-5 my-5 text-center vh-100">
            <h1 className="display-5 mt-4 fw-bold">Your Property has been added successfully.</h1>
            <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to='/'>
                        <button className="btn btn-outline-dark btn-lg px-4">Home </button>
                    </Link>
                    <Link to='listproperty'>
                        <button className="btn btn-outline-dark btn-lg px-4">Add another Property</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success