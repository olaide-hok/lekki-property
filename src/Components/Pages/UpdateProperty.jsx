import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import FormButton from '../Layouts/FormButton';
import Input from '../Layouts/Input'
import validateForm from './ValidateForm';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../LekkiAPI/api'

function UpdateProperty() {

    const [updatePropValue, setUpdatePropValue] = useState(
        {
            bedroom: '',
            sittingRoom: '',
            kitchen: '',
            bathroom: '',
            toilet: '',
            propertyDescription: '',
            validTo: '',
            images: []
        }
    )

    // Handles Error State
    const [errors, setErrors] = useState({
        bedroom: '',
        sittingRoom: '',
        kitchen: '',
        bathroom: '',
        toilet: '',
        propertyDescription: '',
        validTo: '',
    })

    // Handles input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUpdatePropValue(prevPropValue => ({
            ...prevPropValue,
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
        validTo,
    } = updatePropValue

    let navigate = useNavigate();
    const { id } = useParams()
    console.log(id);

    const fetchProperty = async (id) => {
        try {
            const response = await api.get(`/v1/lekki/property/${id}`)
            const { data } = response.data
            console.log(data);
            setUpdatePropValue(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchProperty(id)
    }, [])


    // Handles Form Submission
    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        console.log(id);

        const formErrors = validateForm(updatePropValue)

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            console.log(formErrors);
        } else {
            console.log(updatePropValue);
        }

        try {
            const response = await api.patch(`v1/lekki/property/${id}`,
                {
                    "bedroom": bedroom,
                    "sittingRoom": sittingRoom,
                    "kitchen": kitchen,
                    "bathroom": bathroom,
                    "toilet": toilet,
                    "description": description,
                    "validTo": validTo,
                })
            console.log(response.data);
            navigate('/success')
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <Form onSubmit={(e) => handleUpdateSubmit(e)}>
            <Row className='my-4 justify-content-sm-center justify-content-center justify-content-md-center'>

                <Col sm={8} xs={10} md={6} >
                    <h1>Update Property Details</h1>
                    <h5>A {type} owned by {propertyOwner} located at {address}.</h5>

                    <Input
                        name='bedroom'
                        label='Bedrooms'
                        inputType='number'
                        value={bedroom}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Number of Bedrooms'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.bedroom}</Form.Text>

                    <Input
                        name='sittingRoom'
                        label='Sitting Room'
                        inputType='number'
                        value={sittingRoom}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Number of Sitting Room'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.sittingRoom}</Form.Text>

                    <Input
                        name='kitchen'
                        label='Kitchen'
                        inputType='number'
                        value={kitchen}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Number of Kitchen'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.kitchen}</Form.Text>

                    <Input
                        name='bathroom'
                        label='Bathroom'
                        inputType='number'
                        value={bathroom}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Number of Bathroom'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.bathroom}</Form.Text>

                    <Input
                        name='toilet'
                        label='Toilets'
                        inputType='number'
                        value={toilet}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Number of Toilets'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.toilet}</Form.Text>

                    <Input
                        name='description'
                        label='Property Description'
                        inputType='text'
                        value={description}
                        handleInputChange={handleInputChange}
                        placeholder='Enter Property Description'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.description}</Form.Text>

                    <Input
                        name='validTo'
                        label='Valid To'
                        inputType='date'
                        value={validTo}
                        handleInputChange={handleInputChange}
                        placeholder='Valid To'
                        required
                    />
                    <Form.Text className='text-danger'>{errors.validTo}</Form.Text>

                    <FormButton type={"submit"} label={"Update Property"} />
                </Col>
            </Row>
        </Form>
    )
}

export default UpdateProperty