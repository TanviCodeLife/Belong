import React from 'react';
import './assets/styles/Form';


function Form(){
  return (
      <form className='form'>
        <input className='address-input' type="text" name="address"/>
        <select>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>
        <button className='submit-button' type="submit">Look</button>
      </form>
  );
}

export default Form;
