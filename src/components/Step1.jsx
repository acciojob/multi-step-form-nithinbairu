import React from 'react';

const Step1 = ({ formData, handleChange }) => {
  return (
    <div id="step1">
      <h2>Customer Details</h2>
      <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} />
      <br />
      <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} />
    </div>
  );
};

export default Step1;
