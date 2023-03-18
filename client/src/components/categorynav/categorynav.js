import React from 'react'
import { Link } from 'react-router-dom';
import './catnav.css';
import Sidebar from './sidebar';

const categorynav = () => {
  return (
<div className='d-flex flex-grow-1 text-wrap overflow-hidden'>

<ul className="nav nav-tabs bg-secondary settingwidth">

<Link className="nav-link" to="/">
    <button className="btn btn-secondary menuimageside highzindex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars"></i></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

  <div className="offcanvas-header justify-content-end">
  <h1>ShopZo</h1>
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

  </div>
  <Sidebar/>  
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
