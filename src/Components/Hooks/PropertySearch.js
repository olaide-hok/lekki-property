import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Input from '../Layouts/Input'
import { Container } from 'react-bootstrap'

function PropertySearch({ params, onParamChange}) {
  return (
    <>
    <Container>
    <Form className='mb-4 row row-cols-2'>
    <Form.Group className="col">
    <Form.Label>Sitting Room</Form.Label>
    <Form.Control
      name='sittingRoom'
      type='text'
      value={params.sittingRoom}
      onChange={onParamChange}
      placeholder="No of Sitting Room" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label>Kitchen</Form.Label>
    <Form.Control
      name='kitchen'
      type='text'
      value={params.kitchen}
      onChange={onParamChange}
      placeholder="No of Kitchen" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label>Bedroom</Form.Label>
    <Form.Control
      name='bedroom'
      type='text'
      value={params.bedroom}
      onChange={onParamChange}
      placeholder="No of Bedroom" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label>Bathroom</Form.Label>
    <Form.Control
      name='bathroom'
      type='text'
      value={params.bathroom}
      onChange={onParamChange}
      placeholder="No of Bathroom" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label>Toilet</Form.Label>
    <Form.Control
      name='toilet'
      type='text'
      value={params.toilet}
      onChange={onParamChange}
      placeholder="No of Toilet" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label>Property Owner</Form.Label>
    <Form.Control
      name='propertyOwner'
      type='text'
      value={params.propertyOwner}
      onChange={onParamChange}
      placeholder="Property Owner" />
    </Form.Group>    
    </Form>
    </Container>

    </>
  )
}

export default PropertySearch