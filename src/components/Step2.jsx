import React from 'react'

const Step2 = ({ formData, handleChange }) => {
  return (
    <>
        <h2>Car Details</h2>
        <input type='text' id="model" value={formData.model}
        onChange={handleChange}></input>
        <br></br>
        <input type='text' id="car_price" value={formData.car_price}
        onChange={handleChange}></input>
    </>
  )
}

export default Step2