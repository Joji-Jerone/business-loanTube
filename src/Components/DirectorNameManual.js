import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const DirectorNameManual = () => {

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
      <form onSubmit={()=>setStep(13)}>
      <h1>Which director are you?</h1>
      <label>Your name:</label> <br />
      <input
      type = "text" 
      name = "First Name"
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input><br />
      <input
      type = "text" 
      name = "Last Name"
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input><br />
      <button onClick={()=>setStep(11)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default DirectorNameManual 
