import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

import 'react-datepicker/dist/react-datepicker.css';

const DirectorName = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const handleSelectChange = (e) => {
    setData({
       ...data,
       DirectorName: e.target.value,
     });
 };

 const handleSubmit = () => {
  if(data.DirectorName === "default"){
    setStep(12)
  }else{
    setStep(14)
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Which director are you?</h1>
      <select value = {data.DirectorName}onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="test1<">test1</option>
          <option value="default">I'm not one of these people</option>
      </select><br />

      <button onClick={()=>setStep(10)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default DirectorName
