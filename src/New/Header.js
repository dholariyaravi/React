import React from 'react'
import { Outlet, Link } from "react-router-dom";
import CustComLink from '../Leval2oll/HOC11/CustComLink';


export default function Header() {
  return (
    <div>
      
      <nav className="navbar navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand " href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <CustComLink className="nav-link" to="/">Home</CustComLink>
      </li>

      <li className="nav-item active">
      <CustComLink className="nav-link" to="/Loginsw2">Form11</CustComLink>
      </li>

      <li className="nav-item">
      <CustComLink className="nav-link" to="/Grid2img">Grid2img</CustComLink>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown ">
        <CustComLink className="dropdown-item " to="/Fromsi1">Fromsi1</CustComLink>
        <CustComLink className="dropdown-item " to="/Fromsi1">Fromsi1</CustComLink>
         
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      

      <li className="nav-item">
      <CustComLink className="nav-link" to="/Css">Css</CustComLink>
      </li>

    </ul>

    <nav className="navbar navbar navbar-dark bg-dark ">


</nav>
   
  </div>
</nav>
    </div>
  )
}
