import React from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      
      <nav class="navbar navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand " href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link class="nav-link" to="/">Home</Link>
      </li>

      <li class="nav-item active">
      <Link class="nav-link" to="/Form11">Form11</Link>
      </li>

      <li class="nav-item">
      <Link class="nav-link" to="/Grid2img">Grid2img</Link>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown ">
        <Link class="dropdown-item " to="/Fromsi1">Fromsi1</Link>
        <Link class="dropdown-item " to="/Fromsi1">Fromsi1</Link>
         
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/Fromsi1">Fromsi1</Link>
      </li>
    </ul>

    <nav class="navbar navbar navbar-dark bg-dark ">
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
   
  </div>
</nav>
    </div>
  )
}
