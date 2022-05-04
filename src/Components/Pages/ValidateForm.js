const validateForm = (inputValue) => {
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
    } = inputValue

    const newErrors = {}

    if (!address || address === '') {
      newErrors.address = 'Please Enter Property Address.'
    }
    if (!type || type === '') {
      newErrors.type = 'Please Enter Property Type.'
    }
    if (!propertyOwner || propertyOwner === '') {
      newErrors.propertyOwner = 'Please Enter Property Owner.'
    }
    if (!description || description === '') {
      newErrors.description = 'Please Enter Property Description.'
    }
    if (!bedroom || bedroom === 0 || bedroom < 0) {
      newErrors.bedroom = 'Please Enter Valid Numbers of Bedroom.'
    }
    if (!sittingRoom || sittingRoom === 0 || sittingRoom < 0) {
      newErrors.sittingRoom = 'Please Enter Valid Numbers of Sitting Room.'
    }
    if (!kitchen || kitchen === 0 || kitchen < 0) {
      newErrors.kitchen = 'Please Enter Valid Numbers of Kitchen.'
    }
    if (!bathroom || bathroom === 0 || bathroom < 0) {
      newErrors.bathroom = 'Please Enter Valid Numbers of Bathroom.'
    }
    if (!toilet || toilet === 0 || toilet < 0) {
      newErrors.toilet = 'Please Enter Valid Numbers of Toilet.'
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