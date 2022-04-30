import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

function PropertyInfo({ property }) {

    const [open, setOpen] = useState(false)
    return (

            <Row lg={{cols:2}} className="g-2">
                <Col>
                    <Card className='mb-3'>
                        <Card.Img variant="" src="" />
                        <Card.Body>
                            <Card.Title>{property.type.toUpperCase()}</Card.Title>
                            <Card.Text> Description: {property.description} </Card.Text>
                            <Card.Text> Address: {property.address} </Card.Text>
                            <Card.Text> Owner: {property.propertyOwner} </Card.Text>

                            <Card.Text>
                                <Button 
                                    variant='secondary'
                                    onClick={() =>setOpen(prevOpen => !prevOpen)}
                                >
                                    {open ? 'Hide Details' : 'View Details'}                                
                                </Button>
                            </Card.Text>
                            <Collapse in={open}>
                                <ListGroup className="mt-4">
                                    <ListGroup.Item>Bedroom: {property.bedroom} </ListGroup.Item>
                                    <ListGroup.Item>Sitting Room: {property.sittingRoom}</ListGroup.Item>
                                    <ListGroup.Item>Kitchen: {property.kitchen} </ListGroup.Item>
                                    <ListGroup.Item>Bathroom: {property.bathroom} </ListGroup.Item>
                                    <ListGroup.Item>Toilet: {property.toilet} </ListGroup.Item>
                                </ListGroup>                            
                            </Collapse>                            
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