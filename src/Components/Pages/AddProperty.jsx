import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
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
  };

  // Handles Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <>
    <Container className='my-4 mx-auto align-items-center justify-content-center'>    
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
          placeholder='Enter Property Type eg. Flat, House etc'
          required
        />

        <Input
          name='numOfBedroom'
          label='Bedrooms'
          inputType='number'
          value={inputValue.numOfBedroom}
          placeholder='Enter Number of Bedrooms'
          required
        />

        <Input
          name='numOfSittingRoom'
          label='Sitting Room'
          inputType='number'
          value={inputValue.numOfSittingRoom}
          placeholder='Enter Number of Sitting Room'
          required
        />

        <Input
          name='numOfKitchen'
          label='Ktchen'
          inputType='number'
          value={inputValue.numOfKitchen}
          placeholder='Enter Number of Kitchen'
          required
        />

        <Input
          name='numOfBathroom'
          label='Bathroom'
          inputType='number'
          value={inputValue.numOfBathroom}
          placeholder='Enter Number of Bathroom'
          required
        />

        <Input
          name='numOfToilets'
          label='Toilets'
          inputType='number'
          value={inputValue.numOfToilets}
          placeholder='Enter Number of Toilets'
          required
        />

        <Input
          name='propertyOwner'
          label='Property Owner'
          inputType='text'
          value={inputValue.propertyOwner}
          placeholder='Enter Property Owner'
          required
        />

        <Input
          name='propertyDescription'
          label='Property Description'
          inputType='text'
          value={inputValue.propertyDescription}
          placeholder='Enter Property Description'
          required
        />

        <Input
          name='validFrom'
          label='Valid from'
          inputType='date'
          value={inputValue.validFrom}
          placeholder='Valid From'
          required
        />

        <Input
          name='validTo'
          label='Valid To'
          inputType='date'
          value={inputValue.validTo}
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
      </Container>
    </>
  )
}

export default Addproperty