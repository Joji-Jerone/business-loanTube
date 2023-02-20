import React , { useContext } from 'react'
import { multiStepContext } from './StepContext'

const Business = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };


  return (
    <div>
      <h1>What is your business name?</h1>
      <form>
      <label>Business name <br/> </label>
      <input
      type = "text" 
      name = "Business Name"
      onKeyDown={handleKeyPress}
      onChange={handleChange}   > 
      </input><br/>
      <button onClick={()=>setStep(1)}>Previous</button>
      <button type='submit' onClick={()=>setStep(3)}>Next</button>
      </form>
    </div>
  )
}

export default Business
