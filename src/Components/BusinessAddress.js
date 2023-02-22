import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const BusinessAddress = () => {
  const {setStep , data , setData} = useContext(multiStepContext)

  return (
    <div>
      <form onSubmit={()=>setStep(101)}>
      <h1>What is your business trading address?</h1>
      <select>
          <option value="default">My address isn't listed here</option>
      </select><br />
      <button onClick={()=>setStep(9)}>Previous</button>
      <button type='submit'>Next</button>
    </form> 
    </div>
  )
}

export default BusinessAddress
