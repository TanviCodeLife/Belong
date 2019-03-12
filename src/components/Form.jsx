import React from 'react';
import styled from 'styled-components';
import { fetchCoords } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PinIcon from './assets/pin_icon.png';

const FormStyles = styled.form`
  margin-left: 22%;
  font-size: 1vw;
  display: flex;
  flex-direction: row;
`

const FormInputStyles = styled.input`
  width: 100%;
  border: 2px solid transparent;
  background-image:url(./assets/Portland_Belong.jpg);
  background-repeat: no-repeat;
  background-position: 4px 4px;
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
  padding-left: 3rem;
  padding-bottom: 12px;
  background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
  background-position: 97% center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: white;
`;

const FormButtonStyles = styled.button`
  background: #4d0000;
  border: 1px solid #4d0000;
  color: #fff;
  width: 50%;
  text-align: center;
  font-size: 1.15em;
  cursor: pointer;
  transition: all 0.2s;
}
  &:hover ${FormButtonStyles}{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
   background: #4d0000;
   border: 1px solid #4d0000;
}
`;

const ImageStyle = styled.img`
  height: 2rem;
  left: 7%;
  margin-top: 1%;
  position relative;
`;

function Form({ dispatch }){
  let _address = null;
  let showMap = false;

  function handleNewAddressFormSubmission(event){
    event.preventDefault();
    const formattedAddress = _address.value.replace(/\s/g, '+');
    showMap = true;
    dispatch(fetchCoords(formattedAddress, showMap));
  }

  return (
      <FormStyles onSubmit={handleNewAddressFormSubmission}>
        <ImageStyle src={PinIcon} alt='Logo'/>
        <FormInputStyles
          type='text'
          placeholder='Where do you want to belong?'
          id='address'
          ref={(input) => {_address = input;}}/>
        <SelectInputStyles>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </SelectInputStyles>
        <FormButtonStyles type="submit">Look</FormButtonStyles>
      </FormStyles>
  );
}

Form.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Form);
