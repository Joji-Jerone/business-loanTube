import React , {useContext} from 'react';
import './App.css';
import LoanAmount from './Components/LoanAmount';
import Purpose from './Components/Purpose';
import BusinessName from './Components/BusinessName'
import BusinessNameManual from './Components/BusinessNameManual'
import Mobile from './Components/Mobile'
import Otp from './Components/Otp'
import Revenue from './Components/Revenue'
import Card from './Components/Card';
import CardSales from './Components/CardSales'
import Invoices from './Components/Invoices';
import BusinessAddress from './Components/BusinessAddress'
import BusinessAddressManual from './Components/BusinessAddressManual'
import DirectorName from './Components/DirectorName'
import DirectorNameManual from './Components/DirectorNameManual'
import Job from './Components/Job'
import Dob from './Components/Dob'
import DirectorAddress from './Components/DirectorAddress';
import DirectorAddressmanual from './Components/DirectorAddressmanual';
import ResidentialStatus from './Components/ResidentialStatus';
import PropertyValue from './Components/PropertyValue';
import Email from './Components/Email';
import Terms from './Components/Terms'
import {multiStepContext} from './Components/StepContext';
import BusinessType from './Components/BusinessType';
import BusinessAge from './Components/BusinessAge';
 
function App() {
  const {currentStep} = useContext(multiStepContext)
  function showStep(step) {
    switch(step) {
      case 1 : return <LoanAmount />
      case 2 : return <Purpose />
      case 3 : return <BusinessName />
      case 4 : return <BusinessNameManual /> 
      case 41 : return <BusinessType />
      case 42 : return <BusinessAge />
      case 5 : return <Mobile /> 
      case 6 : return  <Otp /> 
      case 7 : return <Revenue /> 
      case 8 : return <Card />  
      case 81 : return  <CardSales /> 
      case 9 : return <Invoices /> 
      case 10 : return <BusinessAddress />
      case 101 : return <BusinessAddressManual/>
      case 11 : return <DirectorName />
      case 12 : return <DirectorNameManual />
      case 13 : return <Job /> 
      case 14 : return <Dob />
      case 15 : return <DirectorAddress />
      case 16 : return <DirectorAddressmanual />
      case 17 : return <ResidentialStatus />
      case 18 : return <PropertyValue />
      case 19 : return  <Email /> 
 
      default : return <h1>Loan Tube Page Loading</h1>
    }
  }
  return (
    <div className="App">
      { showStep(currentStep)}
    </div>
  )
}

export default App;