import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import api from '../LekkiAPI/api'

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

  useEffect(() => {
    fetchProperty(id)
  }, [])

  return (
    <>
      {Object.values(property) !== 0 && (<Card className='vh-100'>
        <Card.Img variant="" src="" />
        <Card.Body>
          <Card.Title>Property Details</Card.Title>
          <Card.Text>Property Type: {(property.type)}</Card.Text>
          <Card.Text> Description: {property.description} </Card.Text>
          <Card.Text> Address: {property.address} </Card.Text>
          <Card.Text> Owner: {property.propertyOwner} </Card.Text>

          <ListGroup className="mt-4">
            <ListGroup.Item>Bedroom: {property.bedroom} </ListGroup.Item>
            <ListGroup.Item>Sitting Room: {property.sittingRoom}</ListGroup.Item>
            <ListGroup.Item>Kitchen: {property.kitchen} </ListGroup.Item>
            <ListGroup.Item>Bathroom: {property.bathroom} </ListGroup.Item>
            <ListGroup.Item>Toilet: {property.toilet} </ListGroup.Item>
          </ListGroup>

        </Card.Body>
      </Card>)}
    </>

  )
}

export default PropertyPage