
import React, { useState } from "react";
import './../styles/App.css';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const App = () => {

  const [step,setStep]=useState(0);
  const [formData,setFormData]=useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  })
  function previous(){
    setStep(step-1)
  }
  function next(){
    setStep(step+1)
  }
  function handleChange(e){
    const {id,value}=e.target
    setFormData((prev)=>({
      ...prev,[id]:"value"
    }))
  }
  function submit(){
    console.log(formData);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {
          (step==0)&&(<Step1 formData={formData} handleChange={handleChange} />)
        }
        {
          (step==1)&&(<Step2 formData={formData} handleChange={handleChange} />)
        }
        {
          (step==2)&&(<Step3 formData={formData} handleChange={handleChange} />)
        }
        {
          step>0?(
            <button onClick={previous}>Previous</button>
          ):""
        }
        {
          step<2?(
            <button onClick={next}>Next</button>
          ):''
        }
        
        {
          (step==2)&&(
            <button onClick={submit}>Submit</button>
          )
        }

    </div>
  )
}

export default App
