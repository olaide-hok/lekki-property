import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import api from '../LekkiAPI/api'
import { Button, Container } from 'react-bootstrap'

function PropertyPage() {
  const { id } = useParams()
  const [property, setProperty] = useState({})

  const fetchProperty = async (id) => {
    try {
      const response = await api.get(`/v1/lekki/property/${id}`)
      const { data } = response.data
      setProperty(data)
    } catch (error) {
      console.log(error.message);
    }
  }

  const navigate = useNavigate()

  const updateProperty = (id) => {
    console.log(id);
    navigate(`updateproperty/${id}`)
  }

  useEffect(() => {
    fetchProperty(id)
  }, [])

  const {
    type,
    description,
    address,
    propertyOwner,
    bedroom,
    sittingRoom,
    kitchen,
    bathroom,
    toilet
  } = property



  return (
    <Container className='vh-100'>
      {Object.values(property) !== 0 && (<Card className='h-100' >
        <Card.Img variant="" src="" />
        <Card.Body>
          <Card.Title>Property Details</Card.Title>
          <Card.Text>Property Type: {type}</Card.Text>
          <Card.Text> Description: {description} </Card.Text>
          <Card.Text> Address: {address} </Card.Text>
          <Card.Text> Owner: {propertyOwner} </Card.Text>

          <ListGroup className="mt-4">
            <ListGroup.Item>Bedroom: {bedroom} </ListGroup.Item>
            <ListGroup.Item>Sitting Room: {sittingRoom}</ListGroup.Item>
            <ListGroup.Item>Kitchen: {kitchen} </ListGroup.Item>
            <ListGroup.Item>Bathroom: {bathroom} </ListGroup.Item>
            <ListGroup.Item>Toilet: {toilet} </ListGroup.Item>
          </ListGroup>

          <Button
            variant='outline-dark'
            className='mt-4'
            onClick={() => updateProperty(id)}
          >
            Click to Update Property
          </Button>
        </Card.Body>
      </Card>)}
    </Container>

  )
}

export default PropertyPage