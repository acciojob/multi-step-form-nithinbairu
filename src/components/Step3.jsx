import React from 'react'

const Step3 = ({ formData, handleChange }) => {
  return (
    <>
        <h2>Payment Details</h2>
        <input type='text' id="card_info" value={formData.card_info}
        onChange={handleChange}></input>
        <br></br>
        <input type='text' id="expiry_date" value={formData.expiry_date}
        onChange={handleChange}></input>
    </>
  )
}

export default Step3