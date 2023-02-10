// @flow
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/App.css';

function Navbar() {

    return (
      <div>
       
       <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand font-weight-bold text-danger" href="#" > 
  <h2>
  
    <i class="fas fa-shopping-cart"></i>
 

    E_REDUX 
    
    </h2> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      
       
        
      </ul>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
 
     <i class="fas fa-shopping-bag fa-2x grey">  </i>
            </form>
           
    </div>
  </div>
</nav>

       
      </div>
    );
  };
  export default Navbar;

