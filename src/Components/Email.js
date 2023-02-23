import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Email = () => {
  const {setStep , data , setData} = useContext(multiStepContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("thank you for your response")
  }

  const handleChange = (e) => {
    e.preventDefault()
    setData({
      ...data,
      email: e.target.value,
    })
  }
  return (
    <div>
      <h1>Email</h1>
      <h4> We'll notify you of changes and updates about your application, new products and features.</h4>
      <form onSubmit={handleSubmit}>
      <label >Your Email address</label><br />
      <input
      id="standard-adornment-amount"
      type="email"
      value= {data.email}
      onChange={handleChange}
      required/>
      <br />
      <p>
         <h3>By pressing Find your loan:</h3>
         <p>
         1. you confirm you agree to and accept our Terms and Conditions, Privacy Policy and Cookies Policy.<br />
         2. you consent to receive information from LoanTube & its providers & partners about this loan application and other latest products and services via email, SMS and call.<br />
         3. you confirm you understand that the information you have provided will be shared with our panel of providers & partners who will use it to see if you are eligible for a loan. This will involve a soft search being carried out upon you, your business and other directors/partners of the business. This will not affect your credit rating and will only be visible to you.<br />
         </p> 
      </p>
      <button onClick={()=>setStep(17)}>Previous</button>
      <button type='submit'>Find your loan</button>
      </form>
    </div>
    
  )
}

export default Email
