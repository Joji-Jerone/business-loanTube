import React , { useContext} from 'react'
import { multiStepContext } from './StepContext';

const Purpose = () => {

      const {setStep , data , setData} = useContext(multiStepContext)
    
      const handleSelectChange = (e) => {
         setData({
            ...data,
            Purpose: e.target.value,
          });
      };

  return (
    <div>
      <form onSubmit={()=>setStep(3)}>
      <h1>What do you need this loan for?</h1>
      <select value={data} onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="Business Growth%">Business Growth%</option>
          <option value="Additional Cashflow">Additional Cashflow</option>
          <option value="Stock & Inventory Purchase">Stock & Inventory Purchase</option>
          <option value="Plant & Machinery Purchase">Plant & Machinery Purchase</option>
          <option value="Vehicle Purchase">Vehicle Purchase</option>
          <option value="Existing Loan Refinance">Existing Loan Refinance</option>
          <option value="Other Purposes">Other Purposes</option>
      </select><br />
      <button onClick={()=>setStep(1)}>Previous</button>
      <button 
      type='submit' >Next</button>
      </form>
    </div>
  )
}

export default Purpose
