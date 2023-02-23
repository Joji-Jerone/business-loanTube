import React , { useContext} from 'react'
import { multiStepContext } from './StepContext';

const BusinessAge = () => {
   const {setStep , data , setData} = useContext(multiStepContext)
    
      const handleSelectChange = (e) => {
         setData({
            ...data,
            businessage: e.target.value,
          });
      };

  return (
    <div>
      <form onSubmit={()=>setStep(5)}>
      <h1>How long you've been trading for?</h1>
      <label>Business Age</label><br />
      <select value={data.businessage} onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="1<">Less than 1 year</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select><br/>
      <button onClick={()=>setStep(41)} >Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BusinessAge
