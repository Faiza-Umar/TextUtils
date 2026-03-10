
import {useState} from "react";
import React from 'react';


 function Navbar(props){

 {/* const[count,setCount] = useState(53);

 let styleMode = {
    color: 'White',
    backgroundColor: 'black'
  }*/}
    return(
    
     
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid" /*style={styleMode}*/ >
    <a className="navbar-brand" href="/" /*style={styleMode}*/>{props.name}  {/*{count}*/}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" /*style={styleMode}*/ >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" /*style={styleMode}*/ >{props.about}</a>
        </li>
      </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>*/}

      <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Mode
  </label>
</div>

    </div>
  </div>
</nav>

    );
  }
 

 export default Navbar;
