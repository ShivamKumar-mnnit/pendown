import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../img/logo-3.png';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={logo} alt="/" width={160}></img></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
          <li className="nav-item mx-3">
            <Link className="nav-link active " aria-current="page" to="/">your profile</Link>
          </li><li className="nav-item mx-3">
            <Link className="nav-link active" aria-current="page" to="/">Quick notes</Link>
          </li><li className="nav-item mx-3">
            <Link className="nav-link active" aria-current="page" to="/">Testimonials</Link>
          </li><li className="nav-item mx-3">
            <Link className="nav-link active" aria-current="page" to="/event">events</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-warning mx-2 " type="submit">Login</button>
          <button className="btn btn-outline-warning mx-2" type="submit">Register now</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default navbar
