import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import useFetchProperty from '../LekkiAPI/useFetchProperty'
import PropertyInfo from './PropertyInfo'

function ListProperty() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState()

    const { properties, loading, error } = useFetchProperty(params, page)
    console.log(properties);

    return (
        <>
            <Container className='my-4'>
                <h1>List of Properties</h1>
                {loading && <h1>Loading ...</h1>}
                {error && <h1>Error. Try Refreshing.</h1>}
                {
                    properties.map((property, index) => {
                        return <PropertyInfo
                            key={index}
                            property={property}
                        />
                    })
                }
            </Container>

        </>
    )
}

export default ListProperty