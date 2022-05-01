import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function PropertyInfo({ property }) {

    let navigate = useNavigate()

    return (
        <Row className="justify-content-center">
            <Col>
                <Card className='h-100'>
                    <Card.Img variant="" src="" />
                    <Card.Body>
                        <Card.Title>{property.type.toUpperCase()}</Card.Title>
                        <Card.Text> Description: {property.description} </Card.Text>
                        <Card.Text> Address: {property.address} </Card.Text>
                        <Card.Text> Owner: {property.propertyOwner} </Card.Text>

                        <Button
                            variant='dark'
                            onClick={() => {
                                navigate(`/listproperty/${property._id}`)
                            }}
                        >
                            View Details
                        </Button>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default PropertyInfo


// address,
// type,
// bedroom,
// sittingRoom,
// kitchen,
// bathroom,
// toilet,
// propertyOwner,
// description,
// validFrom,
// validTo 