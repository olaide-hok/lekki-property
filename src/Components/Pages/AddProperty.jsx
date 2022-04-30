import React, { useState } from 'react'
import axios from 'axios'
import { Container, Form, Row } from 'react-bootstrap';
import FormButton from '../Layouts/FormButton';
import Input from '../Layouts/Input'

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
      images: {}
    }
  )

  // Handles input changes 
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValue(prevInputValue => ({
      ...prevInputValue,
      [name]: value
    }))

    console.log(inputValue);
  };

  
const LEKKI_API_URL = 'https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property'


  // Handles Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()

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
    <Form onSubmit={(e) => handleSubmit(e)} className='my-4 mx-auto align-items-center justify-content-center'>    
      <Row onSubmit={handleSubmit} className=''>
        <Input
          name='propertyAddress'
          label='Property Address'
          inputType='text'
          value={inputValue.propertyAddress}
          handleInputChange={handleInputChange}
          placeholder='Enter Property Address'
          required
        />

        <Input
          name='propertyType'
          label='Property Type'
          inputType='text'
          value={inputValue.propertyType}
          handleInputChange={handleInputChange}
          placeholder='Enter Property Type eg. Flat, House etc'
          required
        />

        <Input
          name='numOfBedroom'
          label='Bedrooms'
          inputType='number'
          value={inputValue.numOfBedroom}
          handleInputChange={handleInputChange}
          placeholder='Enter Number of Bedrooms'
          required
        />

        <Input
          name='numOfSittingRoom'
          label='Sitting Room'
          inputType='number'
          value={inputValue.numOfSittingRoom}
          handleInputChange={handleInputChange}
          placeholder='Enter Number of Sitting Room'
          required
        />

        <Input
          name='numOfKitchen'
          label='Ktchen'
          inputType='number'
          value={inputValue.numOfKitchen}
          handleInputChange={handleInputChange}
          placeholder='Enter Number of Kitchen'
          required
        />

        <Input
          name='numOfBathroom'
          label='Bathroom'
          inputType='number'
          value={inputValue.numOfBathroom}
          handleInputChange={handleInputChange}
          placeholder='Enter Number of Bathroom'
          required
        />

        <Input
          name='numOfToilets'
          label='Toilets'
          inputType='number'
          value={inputValue.numOfToilets}
          handleInputChange={handleInputChange}
          placeholder='Enter Number of Toilets'
          required
        />

        <Input
          name='propertyOwner'
          label='Property Owner'
          inputType='text'
          value={inputValue.propertyOwner}
          handleInputChange={handleInputChange}
          placeholder='Enter Property Owner'
          required
        />

        <Input
          name='propertyDescription'
          label='Property Description'
          inputType='text'
          value={inputValue.propertyDescription}
          handleInputChange={handleInputChange}

          placeholder='Enter Property Description'
          required
        />

        <Input
          name='validFrom'
          label='Valid from'
          inputType='date'
          value={inputValue.validFrom}
          handleInputChange={handleInputChange}
          placeholder='Valid From'
          required
        />

        <Input
          name='validTo'
          label='Valid To'
          inputType='date'
          value={inputValue.validTo}
          handleInputChange={handleInputChange}
          placeholder='Valid To'
          required
        />

        <div className='my-3'>
          <label htmlFor="images" className='form-label'>Upload Property Image</label>
          <input
          className='form-control'
          name='images'
          type='file'
          onChange={handleInputChange}
          accept='.jpg,.png,.jpeg'
          multiple
          required
        />
        </div>
        
        <FormButton type={"submit"} label={"Add Property"} />
      </Row>
      </Form>
    </>
  )
}

export default Addproperty