import React from 'react'
import { Link } from 'react-router-dom';
import './catnav.css';
import Sidebar from './sidebar';

const categorynav = () => {
  return (
<div className='d-flex flex-grow-1'>



<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><Sidebar/></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
</div>



<ul className="nav nav-tabs bg-secondary settingwidth">

<Link className="nav-link" to="/">
    <button class="btn btn-secondary menuimageside" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
  <Sidebar/>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
</div>
  
    </Link>
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
  <li className="nav-item">
    <Link className="nav-link" to="/">Clothing</Link>
  </li>
</ul>

</div>
  )
}

export default categorynav
