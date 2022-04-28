import React, { useState } from 'react'
import useFetchProperty from '../LekkiAPI/useFetchProperty'
import PropertyInfo from './PropertyInfo'

function ListProperty() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState()

    const { properties, loading, error } = useFetchProperty(params, page)
    console.log(properties);

    return (
        <>
            <div>List of Properties</div>
            {loading && <h1>Loading ...</h1> }
            {error && <h1>Error. Try Refreshing.</h1> }
            {
                properties.map((property, index) => {
                    return <PropertyInfo
                                key={index}
                                property={property}
                            />
                })
            }



        </>
    )
}

export default ListProperty