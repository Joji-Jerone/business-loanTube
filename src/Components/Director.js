import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Director = () => {

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

      <h1>Your name:</h1>
      <input
      type = "text" 
      name = "First Name"
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input>
      <input
      type = "text" 
      name = "Last Name"
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input>

      <h1>What is your job position in the business?</h1>
         <select>
               <option value="Employee">Employee</option>
               <option value="Accountant">Accountant</option>
               <option value="Other">Other</option>
            </select><br />
      <h1>Your date of birth - DD/MM/YYYY</h1>
      <label>D.O.B</label>
      <input type="date" id="dob" name="dob"></input><br />
      <button onClick={()=>setStep(5)} >Previous</button>
      <button onClick={()=>setStep(7)} >Next</button>
    </div>
  )
}

export default Director
