import React from 'react'
import { Col, Form } from 'react-bootstrap'

function Input({label, name, inputType, value, placeholder, handleInputChange}) {
    
    return (
        <Col>
            <Form.Label htmlFor={label} className='mt-2'> {label} </Form.Label>

            <Form.Control
                name={name}
                id={name}
                type={inputType}
                value={value}
                onChange={(e) => handleInputChange(e)}
                placeholder={placeholder}
            />
            
        </Col>
    )
}

export default Input