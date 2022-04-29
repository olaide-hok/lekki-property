import React from 'react'
import Button from 'react-bootstrap/Button'

function FormButton({type, label}) {
  return (
    <Button
        type={type}
        variant='dark'
        className='bg-gradient mb-3'  
    >
        {label}
    </Button>
  )
}

export default FormButton