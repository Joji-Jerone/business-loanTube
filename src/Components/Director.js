import React from 'react'

const Director = () => {
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
      <input></input>
      <input></input>

      <h1>What is your job position in the business?</h1>
         <select>
               <option value="Employee">Employee</option>
               <option value="Accountant">Accountant</option>
               <option value="Other">Other</option>
            </select><br />
      <h1>Your date of birth - DD/MM/YYYY</h1>
      <label>D.O.B</label>
      <input type="date" id="dob" name="dob"></input><br />
      <button>Previous</button>
      <button>Next</button>
    </div>
  )
}

export default Director
