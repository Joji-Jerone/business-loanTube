import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const BusinessAddress = () => {
  const {setStep , data , setData} = useContext(multiStepContext)

  const handleSelectChange = (e) => {
    setData({
       ...data,
       Businessaddress: e.target.value,
     });
 };

 const handleSubmit = () => {
  if(data.Businessaddress === "default"){
    setStep(101)
  }else{
    setStep(11)
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>What is your business trading address?</h1>
      <select value = {data.Businessaddress}onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="test">test</option>
          <option value="default">My address isn't listed here</option>
      </select><br />
      <button onClick={()=>setStep(9)}>Previous</button>
      <button type='submit'>Next</button>
    </form> 
    </div>
  )
}

export default BusinessAddress
