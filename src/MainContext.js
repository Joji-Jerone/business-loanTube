import React from 'react'
import { useState } from "react";
import { createContext } from "react";

export const mainContext = createContext();
const dataModal = {
   loanAmount : "",
   businessName : "",
   businessType : "",
   businessAge : "",
   mobile : "",
   otp : "",
   revenue : "",
   card : "",
   businessSales: "",
   directorName: "",
   firstName: "",
   lastName: "",
   position: "",
   dob: "",
   resiAddress: "",
   homeOwner: "",
   propertyValue: "",
   invoice: "",
   traderAddress: "",
   email: "",

}


const MainContext = (props) => {

   const [data, setData] = useState(dataModal);

  return (
   <mainContext.Provider value={{data, setData }}>
      {props.children}
   </mainContext.Provider>
  )
}

export default MainContext
