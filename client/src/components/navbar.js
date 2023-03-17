import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';



const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar navbar bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ShopZO</Link>

    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">signin/signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">returns&orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><i class="fa-solid fa-cart-shopping">1</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">coin</Link>
        </li>
        
      </ul>
    </div>
</nav>
  )
}

export default navbar
