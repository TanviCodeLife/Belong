import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      <Header/>
      <Homepage />
    </div>
  );
}

export default App;
