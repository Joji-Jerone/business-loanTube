import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

import 'react-datepicker/dist/react-datepicker.css';

const DirectorName = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  return (
    <div>
      <form onSubmit={()=>setStep(12)}>
      <h1>Which director are you?</h1>
      <select>
          <option value="test1<">test1</option>
          <option value="test2">test2</option>
          <option value="test3<">test3</option>
          <option value="test4">test4</option>
          <option value="test5<">test5</option>
          <option value="test6">test6</option>
          <option value="test7<">test7</option>
          <option value="test8">test8</option>
          <option value="default">I'm not one of these people</option>
      </select><br />

      <button onClick={()=>setStep(10)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default DirectorName
