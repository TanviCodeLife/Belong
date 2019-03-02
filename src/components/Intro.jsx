import React from 'react';
import CityImage from './assets/city-landing';
import './assets/styles/Intro.css';

console.log(CityImage);
function Intro(){
  return (
    <div>
      <img  className='cityshot' src={CityImage} alt='city image'/>
    </div>
  );
}

export default Intro;
