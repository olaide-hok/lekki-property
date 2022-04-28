import React from 'react'

function PropertyInfo(
    { 
        property           
    }) {
    return (
        <div>
            {property.address}
            {property.type}
            {property.bedroom}
            {property.sittingRoom}
            {property.kitchen}
            {property.bathroom}
            {property.toilet}
            {property.propertyOwner}
            {property.description}
            <hr />
        </div>
    )
}

export default PropertyInfo


// address, 
// type, 
// bedroom, 
// sittingRoom, 
// kitchen, 
// bathroom, 
// toilet, 
// propertyOwner, 
// description,
// validFrom,
// validTo 