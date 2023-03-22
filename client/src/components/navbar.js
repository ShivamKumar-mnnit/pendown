import React from 'react'
import {Link,  useNavigate } from 'react-router-dom'
import './body/css/style.css';
import './body/css/clash-display.css';
import logo from '../img/logo1.png';

import { Link as ALink} from 'react-scroll';
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
            <Link className="navbar-brand" to="/">
                <img src={logo} width={150} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">



                {!localStorage.getItem('token') ?
        <li className="nav-item">
        <Link className="nav-link" to="/">Quick Notes</Link>
        </li> :
        <li className="nav-item">
        <Link className="nav-link" to="/quicknote">Quick Notes</Link>
        </li>
        }




                    
                    <li className="nav-item">
                        <ALink className="nav-link" to="about">About</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="services">Services</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="portfolio">Portfolio</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="reviews">Reviews</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="team">Team</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="contact">Contact</ALink>
                    </li>
                    <li className="nav-item">
                        <ALink className="nav-link" to="blog">Blog</ALink>
                    </li>
                </ul>
                {!localStorage.getItem('token') ?
        <form className="d-flex" role="search">
          <Link to='/signin'><button className="btn btn-outline-warning mx-2 " type="submit">Login</button></Link>
          <Link to='/signup'><button className="btn btn-outline-warning mx-2" type="submit">Register now</button></Link>
        </form> :
        <form className="d-flex" role="search">
        <Link to='/profile'><button className="btn btn-outline-warning mx-2 " type="submit">Your Profile</button></Link>
        <button className="btn btn-outline-warning mx-2" onClick={handleLogout}  type="submit">Logout</button>
      </form>}
            </div>
        </div>
    </nav>




  </>
  )
}

export default Navbar
