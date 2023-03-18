import React from 'react'
import { Link } from 'react-router-dom';
import './catnav.css';
import Sidebar from './sidebar';

const categorynav = () => {
  return (
<div className='d-flex flex-grow-1'>

<button class="btn btn-primary settingsidebar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><Sidebar/></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
</div>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary settingwidth">

  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Clothing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home appliances</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Health & Beauty Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Food & Grocery</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default categorynav
