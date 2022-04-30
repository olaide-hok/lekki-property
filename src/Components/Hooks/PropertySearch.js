import React from 'react'
import Form from 'react-bootstrap/Form'

function PropertySearch({ params, onParamChange}) {
  return (
    <>
    <Form className='mb-4 row row-cols-2'>
    <Form.Group className="col">
    <Form.Label className='mt-2'>Sitting Room</Form.Label>
    <Form.Control
      name='sittingRoom'
      type='text'
      value={params.sittingRoom}
      onChange={onParamChange}
      placeholder="No of Sitting Room" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label className='mt-2'>Kitchen</Form.Label>
    <Form.Control
      name='kitchen'
      type='text'
      value={params.kitchen}
      onChange={onParamChange}
      placeholder="No of Kitchen" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label className='mt-2'>Bedroom</Form.Label>
    <Form.Control
      name='bedroom'
      type='text'
      value={params.bedroom}
      onChange={onParamChange}
      placeholder="No of Bedroom" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label className='mt-2'>Bathroom</Form.Label>
    <Form.Control
      name='bathroom'
      type='text'
      value={params.bathroom}
      onChange={onParamChange}
      placeholder="No of Bathroom" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label className='mt-2'>Toilet</Form.Label>
    <Form.Control
      name='toilet'
      type='text'
      value={params.toilet}
      onChange={onParamChange}
      placeholder="No of Toilet" />
    </Form.Group>

    <Form.Group className="col">
    <Form.Label className='mt-2'>Property Owner</Form.Label>
    <Form.Control
      name='propertyOwner'
      type='text'
      value={params.propertyOwner}
      onChange={onParamChange}
      placeholder="Property Owner" />
    </Form.Group>    
    </Form>

    </>
  )
}

export default PropertySearch