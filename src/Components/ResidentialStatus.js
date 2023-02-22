import React , {useContext} from 'react'
import { useState } from 'react';
import { multiStepContext } from './StepContext';


const ResidentialStatus = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  return (
    <div>
      <form onSubmit={()=>setStep(18)}>
      <h1>Are you a homeowner?</h1>
         <select required>
            <option value="yes, with a mortgage">Yes, with a mortgage</option>
            <option value="yes, without a mortgage">Yes, without a mortgage</option>
            <option value="no">No</option>
         </select><br />
         <button onClick={()=>setStep(15)} >Previous</button>
        <button type='submit' >Next</button>
         </form>
    </div>
  )
}

export default ResidentialStatus