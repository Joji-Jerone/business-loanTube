import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dob = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [date, setDate] = useState("");

  function handleDateChange(event) {
    const { value } = event.target;
    const inputLength = value.length;
    let formattedDate = value;

    if (
      (inputLength === 2 && !value.includes("/")) ||
      (inputLength === 5 && value.slice(-1) !== "/")
    ) {
      formattedDate = `${value}/`;
    }

    // Remove forward slashes from the input value
    formattedDate = formattedDate.replace(/\//g, "");

    // Add forward slashes to the input value in the correct places
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(
        2,
        4
      )}/${formattedDate.slice(4, 8)}`;
    } else if (formattedDate.length > 4) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(
        2,
        4
      )}/${formattedDate.slice(4, formattedDate.length)}`;
    }

    setData(formattedDate);
    setData({
      ...data,
      dob: formattedDate,
    });
    console.log(data.dob)
  }
   
  function checkAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    
    const isOldEnough = age >= 18;
    let hasPermission = isOldEnough; // declaring with let instead of const
    
    hasPermission = true; // reassigning value to variable declared with let
    
    return hasPermission;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission

    // split the dob string into day, month, and year components
    const [day, month, year] = data.dob.split('/');

    // create a Date object from the day, month, and year components
    const birthDate = new Date(`${month}/${day}/${year}`);

    // calculate age in years
    const age = (new Date()).getFullYear() - birthDate.getFullYear();

    if (age >= 18) {
      setStep(15)
    } else {
      alert("Enter a valid DOB")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Your date of birth - DD/MM/YYYY</h1>
      <input
        type="text"
        id="date-input"
        name="date"
        placeholder="DD/MM/YYYY"
        pattern="\d{2}/\d{2}/\d{4}"
        maxLength="10"
        value={data.dob}
        onChange={handleDateChange}
        required
      />
      <button onClick={()=>setStep(13)} >Previous</button>
      <button type='submit' >Next</button>
      </form>
    </div>
  )
}

export default Dob