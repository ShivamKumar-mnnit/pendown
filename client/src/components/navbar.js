import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './body/css/style.css';
import './body/css/clash-display.css';
import logo from '../img/logo-3.png';

const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/signin');
  }


  return (
    <>
     
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="#">
                <img src={logo} width={80} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Quick Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#reviews">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#team">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#blog">Blog</Link>
                    </li>
                </ul>
                {!localStorage.getItem('token') ?
        <form className="d-flex" role="search">
          <Link to='/signin'><button className="btn btn-outline-warning mx-2 " type="submit">Login</button></Link>
          <Link to='/signup'><button className="btn btn-outline-warning mx-2" type="submit">Register now</button></Link>
        </form> :
        <form className="d-flex" role="search">
        <Link to='/student'><button className="btn btn-outline-warning mx-2 " type="submit">Your Profile</button></Link>
        <button className="btn btn-outline-warning mx-2" onClick={handleLogout}  type="submit">Logout</button>
      </form>}
            </div>
        </div>
    </nav>




  </>
  )
}

export default Navbar
