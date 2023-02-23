import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const Job = () => {
  const {setStep , data , setData} = useContext(multiStepContext)
  
  const handleSelectChange = (e) => {
    setData({
       ...data,
       JobPosition: e.target.value,
     });
 };

  return (
    <div>
      <form onSubmit={()=>setStep(14)}>
      <h1>What is your job position in the business?</h1>
         <select value={data.JobPosition} onChange={handleSelectChange} required>
               <option value="">-- Select an option --</option>
               <option value="Employee">Employee</option>
               <option value="Accountant">Accountant</option>
               <option value="Other">Other</option>
            </select><br />

      <button onClick={()=>setStep(12)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default Job
