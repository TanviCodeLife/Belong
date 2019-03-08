import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  margin-left: 22%;
  font-size: 1vw;
  display: flex;
  flex-direction: row;
`

const FormInputStyles = styled.input`
  width: 100%;
  border: 2px solid transparent;
  box-sizing: border-box;
  padding-top: 12px;
  font-size: 1.15em;
  padding-bottom: 12px;
`

const SelectInputStyles = styled.select`
  -webkit-appearance: button;
  -webkit-border-radius: 2px;
  width: 50%;
  border: 1px solid transparent;
  padding-top: 12px;
  font-size: 1.15em;
  padding-bottom: 12px;
  background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
  background-position: 97% center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: white;
`

const FormButtonStyles = styled.button`
  background: #ef3f5a;
  border: 1px solid #ef3f5a;
  color: #fff;
  width: 50%;
  text-align: center;
  font-size: 1.15em;
  cursor: pointer;
  transition: all 0.2s;
}
  &:hover ${FormButtonStyles}{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
   background: #d73851;
   border: 1px solid #d73851;
}
`

function Form(){
  return (
      <FormStyles>
        <FormInputStyles type='text' placeholder='Where do you want to belong?'/>
        <SelectInputStyles>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </SelectInputStyles>
        <FormButtonStyles type="submit">Look</FormButtonStyles>
      </FormStyles>
  );
}

export default Form;
