import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const DirectorNameManual = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange1 = (e) => {
    setData({
      ...data,
      DirectorFirstName: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setData({
      ...data,
      DirectorLastName: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={()=>setStep(13)}>
      <h1>Which director are you?</h1>
      <label>Your name:</label> <br />
      <input
      type = "text" 
      name = "First Name"
      value={data.DirectorFirstName}
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange1}></input><br />
      <input
      type = "text" 
      name = "Last Name"
      value={data.DirectorLastName}
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange2}></input><br />
      <button onClick={()=>setStep(11)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default DirectorNameManual 
