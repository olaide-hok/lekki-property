import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import FormButton from '../Layouts/FormButton';
import Input from '../Layouts/Input'
import validateForm from './ValidateForm';
import { useNavigate } from 'react-router-dom';
import api from '../LekkiAPI/api'

function Addproperty() {

  const [inputValue, setInputValue] = useState(
    {
      address: '',
      type: '',
      bedroom: '',
      sittingRoom: '',
      kitchen: '',
      bathroom: '',
      toilet: '',
      propertyOwner: '',
      description: '',
      validFrom: '',
      validTo: '',
      images: []
    }
  )

  // Handles Error State
  const [errors, setErrors] = useState({
    address: '',
    type: '',
    bedroom: '',
    sittingRoom: '',
    kitchen: '',
    bathroom: '',
    toilet: '',
    propertyOwner: '',
    description: '',
    validFrom: '',
    validTo: '',
  })

  // Handles input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValue(prevInputValue => ({
      ...prevInputValue,
      [name]: value
    }))

    if (!!errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  };

  const {
    address,
    type,
    bedroom,
    sittingRoom,
    kitchen,
    bathroom,
    toilet,
    propertyOwner,
    description,
    validFrom,
    validTo,
    images
  } = inputValue

  let navigate = useNavigate();

  // Handles Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formErrors = validateForm(inputValue)

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } 
    // else {
    //   console.log(inputValue);
    // }

    try {
      const response = await api.post('v1/lekki/property',
        {
          "address": address,
          "type": type,
          "bedroom": bedroom,
          "sittingRoom": sittingRoom,
          "kitchen": kitchen,
          "bathroom": bathroom,
          "toilet": toilet,
          "propertyOwner": propertyOwner,
          "description": description,
          "validFrom": validFrom,
          "validTo": validTo,
          "images": images
        })
      console.log(response.data);
      navigate('/success')
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row className='my-4 justify-content-sm-center justify-content-center justify-content-md-center'>

          <Col sm={8} xs={10} md={6} >
            <h1>Add Property Details</h1>

            <Input
              name='address'
              label='Property Address'
              inputType='text'
              value={address}
              handleInputChange={handleInputChange}
              placeholder='Enter Property Address'
              required
              errors={errors}
            />
            <Form.Text className='text-danger'>{errors.propertyAddress}</Form.Text>

            <Input
              name='type'
              label='Property Type'
              inputType='text'
              value={type}
              handleInputChange={handleInputChange}
              placeholder='Enter Property Type eg. Flat, House etc'
              required
            />
            <Form.Text className='text-danger'>{errors.propertyType}</Form.Text>

            <Input
              name='bedroom'
              label='Bedrooms'
              inputType='number'
              value={bedroom}
              handleInputChange={handleInputChange}
              placeholder='Enter Number of Bedrooms'
              required
            />
            <Form.Text className='text-danger'>{errors.numOfBedroom}</Form.Text>

            <Input
              name='sittingRoom'
              label='Sitting Room'
              inputType='number'
              value={sittingRoom}
              handleInputChange={handleInputChange}
              placeholder='Enter Number of Sitting Room'
              required
            />
            <Form.Text className='text-danger'>{errors.numOfSittingRoom}</Form.Text>

            <Input
              name='kitchen'
              label='Kitchen'
              inputType='number'
              value={kitchen}
              handleInputChange={handleInputChange}
              placeholder='Enter Number of Kitchen'
              required
            />
            <Form.Text className='text-danger'>{errors.numOfKitchen}</Form.Text>

            <Input
              name='bathroom'
              label='Bathroom'
              inputType='number'
              value={bathroom}
              handleInputChange={handleInputChange}
              placeholder='Enter Number of Bathroom'
              required
            />
            <Form.Text className='text-danger'>{errors.numOfBathroom}</Form.Text>

            <Input
              name='toilet'
              label='Toilets'
              inputType='number'
              value={toilet}
              handleInputChange={handleInputChange}
              placeholder='Enter Number of Toilets'
              required
            />
            <Form.Text className='text-danger'>{errors.numOfToilets}</Form.Text>

            <Input
              name='propertyOwner'
              label='Property Owner'
              inputType='text'
              value={inputValue.propertyOwner}
              handleInputChange={handleInputChange}
              placeholder='Enter Property Owner'
              required
            />
            <Form.Text className='text-danger'>{errors.propertyOwner}</Form.Text>

            <Input
              name='description'
              label='Property Description'
              inputType='text'
              value={description}
              handleInputChange={handleInputChange}
              placeholder='Enter Property Description'
              required
            />
            <Form.Text className='text-danger'>{errors.propertyDescription}</Form.Text>

            <Input
              name='validFrom'
              label='Valid From'
              inputType='date'
              value={inputValue.validFrom}
              handleInputChange={handleInputChange}
              placeholder='Valid From'
              required
            />
            <Form.Text className='text-danger'>{errors.validFrom}</Form.Text>

            <Input
              name='validTo'
              label='Valid To'
              inputType='date'
              value={inputValue.validTo}
              handleInputChange={handleInputChange}
              placeholder='Valid To'
              required
            />
            <Form.Text className='text-danger'>{errors.validTo}</Form.Text>

            <div className='my-3'>
              <label htmlFor="images" className='form-label'>Upload Property Image</label>
              <div className='input-group'>
                <input
                  className='form-control'
                  name='images'
                  type='file'
                  onChange={(e) => {
                    console.log(e.target.files)
                  }}
                  accept='.jpg,.png,.jpeg'
                  multiple
                />
                <button
                  className="btn btn-outline-dark"
                  type="button"
                >
                  Upload
                </button>
              </div>

            </div>
            <FormButton className='my-1' type={"submit"} label={"Add Property"} />
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Addproperty