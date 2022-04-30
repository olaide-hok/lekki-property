import React, { useState } from 'react'
import axios from 'axios'
import { Form, Row } from 'react-bootstrap';
import FormButton from '../Layouts/FormButton';
import Input from '../Layouts/Input'

const LEKKI_API_URL = 'https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property'

function Addproperty() {

  const [inputValue, setInputValue] = useState(
    {
      propertyAddress: '',
      propertyType: '',
      numOfBedroom: '',
      numOfSittingRoom: '',
      numOfKitchen: '',
      numOfBathroom: '',
      numOfToilets: '',
      propertyOwner: '',
      propertyDescription: '',
      validFrom: '',
      validTo: '',
      images: ''
    }
  )

  const [errors, setErrors] = useState({})
  // const setField = (field, value) => {

  //   setInputValue(prevInputValue => ({
  //     ...prevInputValue,
  //     [field]: value
  //   }))

  //   if (!!errors[field]) {
  //     setErrors({
  //       ...errors,
  //       [field]: null
  //     })
  //   }
  // }
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

  const validateForm = () => {
    const {
      propertyAddress,
      propertyType,
      numOfBedroom,
      numOfSittingRoom,
      numOfKitchen,
      numOfBathroom,
      numOfToilets,
      propertyOwner,
      propertyDescription,
      validFrom,
      validTo,
      images
    } = inputValue

    const newErrors = {}

    if (!propertyAddress || propertyAddress === '') {
      newErrors.propertyAddress = 'Please Enter Property Address.'
    }
    if (!propertyType || propertyType === '') {
      newErrors.propertyType = 'Please Enter Property Type.'
    }
    if (!propertyOwner || propertyOwner === '') {
      newErrors.propertyOwner = 'Please Enter Property Owner.'
    }
    if (!propertyDescription || propertyDescription === '') {
      newErrors.propertyDescription = 'Please Enter Property Description.'
    }
    if (!numOfBedroom || numOfBedroom === 0 || numOfBedroom < 0) {
      newErrors.numOfBedroom = 'Please Enter Valid Numbers of Bedroom.'
    }
    if (!numOfSittingRoom || numOfSittingRoom === 0 || numOfSittingRoom < 0) {
      newErrors.numOfSittingRoom = 'Please Enter Valid Numbers of Sitting Room.'
    }
    if (!numOfKitchen || numOfKitchen === 0 || numOfKitchen < 0) {
      newErrors.numOfKitchen = 'Please Enter Valid Numbers of Kitchen.'
    }
    if (!numOfBathroom || numOfBathroom === 0 || numOfBathroom < 0) {
      newErrors.numOfBathroom = 'Please Enter Valid Numbers of Bathroom.'
    }
    if (!numOfToilets || numOfToilets === 0 || numOfToilets < 0) {
      newErrors.numOfToilets = 'Please Enter Valid Numbers of Toilet.'
    }
    if (!validFrom) {
      newErrors.validFrom = 'Please Enter Valid From Date.'
    } else if (validFrom > validTo) {
      newErrors.validFrom = 'Please ensure Valid From Date is earlier than Valid To date.'
    }
    if (!validTo) {
      newErrors.validTo = 'Please Enter Valid To Date.'
    } else if (validTo < validFrom) {
      newErrors.validFrom = 'Please ensure Valid To Date is not earlier than valid From date.'
    }
    if (!images.length === 0) {
      newErrors.images = 'Please Add Property Image with extensions png, jpg, jpeg'
    }

    return newErrors
  }

  // Handles Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      console.log(formErrors);

    } else {
      console.log(inputValue);
    }

    axios.post(
      LEKKI_API_URL,
      inputValue
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)} className='my-4 mx-auto align-items-cEnter justify-content-center'>
        <Row onSubmit={handleSubmit} className=''>
          <Input
            name='propertyAddress'
            label='Property Address'
            inputType='text'
            value={inputValue.propertyAddress}
            handleInputChange={handleInputChange}
            placeholder='Enter Property Address'
            required
            errors={errors}
          />
          <Form.Text className='text-danger'>{errors.propertyAddress}</Form.Text>

          <Input
            name='propertyType'
            label='Property Type'
            inputType='text'
            value={inputValue.propertyType}
            handleInputChange={handleInputChange}
            placeholder='Enter Property Type eg. Flat, House etc'
            required
          />
          <Form.Text className='text-danger'>{errors.propertyType}</Form.Text>

          <Input
            name='numOfBedroom'
            label='Bedrooms'
            inputType='number'
            value={inputValue.numOfBedroom}
            handleInputChange={handleInputChange}
            placeholder='Enter Number of Bedrooms'
            required
          />
          <Form.Text className='text-danger'>{errors.numOfBedroom}</Form.Text>


          <Input
            name='numOfSittingRoom'
            label='Sitting Room'
            inputType='number'
            value={inputValue.numOfSittingRoom}
            handleInputChange={handleInputChange}
            placeholder='Enter Number of Sitting Room'
            required
          />
          <Form.Text className='text-danger'>{errors.numOfSittingRoom}</Form.Text>


          <Input
            name='numOfKitchen'
            label='Ktchen'
            inputType='number'
            value={inputValue.numOfKitchen}
            handleInputChange={handleInputChange}
            placeholder='Enter Number of Kitchen'
            required
          />
          <Form.Text className='text-danger'>{errors.numOfKitchen}</Form.Text>

          <Input
            name='numOfBathroom'
            label='Bathroom'
            inputType='number'
            value={inputValue.numOfBathroom}
            handleInputChange={handleInputChange}
            placeholder='Enter Number of Bathroom'
            required
          />
          <Form.Text className='text-danger'>{errors.numOfBathroom}</Form.Text>

          <Input
            name='numOfToilets'
            label='Toilets'
            inputType='number'
            value={inputValue.numOfToilets}
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
            name='propertyDescription'
            label='Property Description'
            inputType='text'
            value={inputValue.propertyDescription}
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
            <input
              className='form-control'
              name='images'
              type='file'
              onChange={handleInputChange}
              accept='.jpg,.png,.jpeg'
              multiple              
            />
            <Form.Text className='text-danger'>{errors.images}</Form.Text>
          </div>

          <FormButton className='my-1' type={"submit"} label={"Add Property"} />
        </Row>
      </Form>
    </>
  )
}

export default Addproperty