import React , { useState , useContext } from 'react'
import { multiStepContext } from './StepContext'

const BusinessName = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState("")

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleInputChange = (e) => {
    setInp(e.target.value)
    setData({
      ...data,
      Business: e.target.value,
    });
  };


  const handleSubmit = () => {
    if(inp === "My business isn't listed here"){
      setStep(4) 
    }
    else {
      setStep(5)
    }
  }
  
  return (
    <div>
      <h1>What is your business name?</h1>
      <form onSubmit = {handleSubmit}>
      <label>Business name <br/> 
      <input
      type = "text" 
      name = "Business Name"
      value= {inp}
      required
      onKeyDown={handleKeyPress}
      onChange={handleInputChange}> 
      </input>
      </label><br />
      <label>if you can't find your business kindly type - " My business isn't listed here "</label>
      <br/>
      <button onClick={()=>setStep(2)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BusinessName
