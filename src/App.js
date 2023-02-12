import './styles/App.css';
import { useEffect } from 'react';
import axios from 'axios';
import CopyRight from './Component/CopyRight';
import Navbar from './Component/Navbar';
import Signin from'./Component/Signin'
import Products from './Component/Products';
import { Fragment } from 'react';
import React, { useState } from 'react';
import Home from './Component/Home'

const  App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const verifLogged=(i)=>
  {
    setLoggedIn(i)
  }

 
  return (

    <div>
      <Signin 
      />
    </div>



  
  );

}

export default App;
