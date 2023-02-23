import React , {useContext} from 'react'
import { useState } from 'react';
import { multiStepContext } from './StepContext';


const ResidentialStatus = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  const handleSelectChange = (e) => {
    setData({
       ...data,
       ResidentialStatus: e.target.value,
     });
 };

 const handleSubmit = () => {
  if(data.ResidentialStatus === "withmortage" || data.ResidentialStatus === "withoutmortage" ){
    setStep(18)
  }else{
    setStep(19)
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Are you a homeowner?</h1>
         <select  value={data.ResidentialStatus} onChange={handleSelectChange} required>
         <option value="">-- Select an option --</option>
          <option value="withmortage">Yes, with a mortgage</option>
          <option value="withoutmortage">Yes, without a mortgage</option>
            <option value="no">No</option>
         </select><br />
         <button onClick={()=>setStep(15)} >Previous</button>
        <button type='submit' >Next</button>
         </form>
    </div>
  )
}

export default ResidentialStatus