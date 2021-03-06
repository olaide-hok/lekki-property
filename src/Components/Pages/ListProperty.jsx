import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import PropertySearch from '../Hooks/PropertySearch'
import useFetchProperty from '../LekkiAPI/useFetchProperty'
import PropertyInfo from './PropertyInfo'

function ListProperty() {
    const [params, setParams] = useState({})

    const { properties, loading, error } = useFetchProperty(params)

    function handleParamChange(e) {
        const param = e.target.name
        const value = e.target.value
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    return (
        <>
            <Container className='my-4'>
                <h1>List of Properties</h1>
                <PropertySearch params={params} onParamChange={handleParamChange} />

                <Row md={{ cols: 2 }} lg={{ cols: 2 }} className='gap-4'>
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
                </Row>
            </Container>

        </>
    )
}

export default ListProperty