const validateForm = (inputValue) => {
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
    
    return newErrors
  }

export default validateForm