import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
// import api from '../LekkiAPI/api'
import axios from 'axios'

const baseURL = 'https://sfc-lekki-property.herokuapp.com/api'
function PropertyPage() {
  const { id } = useParams()
  console.log(id);
  const [property, setProperty] = useState({})

  // const fetchProperty = async () => {
  //   try {
  //     const response = await api.get(`/v1/lekki/property/${id}`).then()
  //     const { data } = response.data
  //     setProperty(data)
  //     console.log(data);
  //     console.log(property);
  //     // console.log(response.data.message);
  //   } catch (error) {
  //     console.log(error.message);
  //     console.log(error.response.status);
  //   }
  // }

  useEffect(() => {
    // fetchProperty()
    axios
      .get(`${baseURL}/v1/lekki/property/${id}`)
      .then(res => {
        console.log(res.data.data);
        // const property = res.data.data
        setProperty(res.data.data)
        console.log(property);
        return property
      })
      .catch(err => {
        console.log(err.message);
      })

  }, [])

  return (
    <>
    
      <h1 className='vh-100'>
        Property Page {property.type}
      </h1>

      <div>eyidfai {property.type} </div>

      {property && <Card className='h-100'>
        <Card.Img variant="" src="" />
        <Card.Body>
          {/* <Card.Title>{property.type.toUpperCase()}</Card.Title> */}
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
      </Card>}
    </>

  )
}

export default PropertyPage