import React from 'react'
import { useState } from 'react';
 

const Business = () => {

  return (
    <div>
      <h1>What is your business name?</h1>
      <form>
      <label>Business name <br/> </label>
      <input
      type = "text" 
      name = "fullName">     
      </input><br/>
      <button>Previous</button>
      <button>Next</button>
      </form>
    </div>
  )
}

export default Business
