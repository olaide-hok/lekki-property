import React, { useState } from 'react'
import Button from '../Layouts/Button';
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
      validTo: ''
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
      <form onSubmit={handleSubmit}>
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
          label='Property Address'
          inputType='text'
          value={inputValue.propertyType}
          placeholder='Enter Property Type eg. Flat, House etc'
          required
        />

        <Input
          name='numOfBedroom'
          label='Number of Bedrooms'
          inputType='number'
          value={inputValue.numOfBedroom}
          placeholder='Enter Number of Bedrooms'
          required
        />

        <Input
          name='numOfSittingRoom'
          label='Number of Sitting Room'
          inputType='number'
          value={inputValue.numOfSittingRoom}
          placeholder='Enter Number of Sitting Room'
          required
        />

        <Input
          name='numOfKitchen'
          label='Number Of Ktchen'
          inputType='number'
          value={inputValue.numOfKitchen}
          placeholder='Enter Number of Kitchen'
          required
        />

        <Input
          name='numOfBathroom'
          label='Number of Bathroom'
          inputType='number'
          value={inputValue.numOfBathroom}
          placeholder='Enter Number of Bathroom'
          required
        />

        <Input
          name='numOfToilets'
          label='Number of Toilets'
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
        <Button type={"submit"} label={"Add Property"} />
      </form>
    </>
  )
}

export default Addproperty