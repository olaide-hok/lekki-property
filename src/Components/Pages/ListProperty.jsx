import React from 'react'
import useFetchProperty from '../LekkiAPI/useFetchProperty'

function ListProperty() {

    const { properties, loading, error } = useFetchProperty()

    return (
        <>
            <div>List of Properties</div>
            {loading && <h1>Loading ...</h1> }
            {error && <h1>Error. Try Refreshing.</h1> }
            <h1>{properties.length}</h1>



        </>
    )
}

export default ListProperty