import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
import coin from '../img/final_coin.png';


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar navbar bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ShopzO</Link>

    <form className="d-flex" role="search">
<<<<<<< Updated upstream
        <input className="form-control me-2" type="Search " placeholder="Search" aria-label="Search" />
=======
<<<<<<< HEAD
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
=======
        <input className="form-control me-2" type="Search " placeholder="Search" aria-label="Search" />
>>>>>>> eaeadaa2abd57203ec8d34bc1d603f61ab78740e
>>>>>>> Stashed changes
        <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
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
<<<<<<< Updated upstream
          <Link className="nav-link" to="/">Sign-in / Sign-up</Link>
=======
<<<<<<< HEAD
          <Link className="nav-link" to="/signin">signin/signup</Link>
=======
          <Link className="nav-link" to="/">Sign-in / Sign-up</Link>
>>>>>>> eaeadaa2abd57203ec8d34bc1d603f61ab78740e
>>>>>>> Stashed changes
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Returns & orders</Link>
        </li>
        <li className="nav-item">
<<<<<<< Updated upstream
          <Link className="nav-link" to="/"><i className="fa-solid fa-cart-shopping">1</i>cart</Link>
=======
<<<<<<< HEAD
          <Link className="nav-link" to="/"><i className="fa-solid fa-cart-shopping">1</i></Link>
=======
          <Link className="nav-link" to="/"><i className="fa-solid fa-cart-shopping">1</i>cart</Link>
>>>>>>> eaeadaa2abd57203ec8d34bc1d603f61ab78740e
>>>>>>> Stashed changes
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><img src={coin} alt='#' width="30" height="30"></img>200</Link>
        </li>
        
      </ul>
    </div>
</nav>
  )
}

export default navbar
