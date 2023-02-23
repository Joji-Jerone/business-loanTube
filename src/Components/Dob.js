import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dob = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  function isAbove18Years(date) {
    const today = new Date();
    const diffInYears = today.getFullYear() - date.getFullYear();
    if (diffInYears > 18) {
      return true;
    } else if (diffInYears === 18) {
      return today.getMonth() >= date.getMonth() && today.getDate() >= date.getDate();
    }
    return false;
  }

    const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <form onSubmit={()=>setStep(15)}>
      <h1>Your date of birth - DD/MM/YYYY</h1>
      <label>D.O.B</label>

      <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      maxDate={new Date()}
      filterDate={date => isAbove18Years(date)}/>
      <button onClick={()=>setStep(13)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default Dob