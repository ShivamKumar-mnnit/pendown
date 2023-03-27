import React from 'react'
import {Link,  useNavigate,useLocation } from 'react-router-dom'
import './body/css/style.css';
import './body/css/clash-display.css';
import logo from '../img/logo1.png';
import './navbar.css';


import { Link as ALink} from 'react-scroll';
const Navbar = () => {

    const location = useLocation();

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
                <img src={logo} width={120} alt="" />
            </Link>

            <Link to='/quicknotes'><button className="btn btn-outline-warning mx-1 " type="submit"  data-bs-target="#navbarNav">Quick Note</button></Link>
           

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                <Link to='/allmaterial'><li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                       <div className="nav-link">Study Material</div>
                    </li></Link>
                    <Link to='/allprofile'><li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                       <div className="nav-link">Social</div>
                    </li></Link>

                    {location.pathname === "/" && (
                    <>
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="about">About</ALink>
                    </li>
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="services">Services</ALink>
                    </li>
                    
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="reviews">Reviews</ALink>
                    </li>
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="team">Team</ALink>
                    </li>
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="contact">Contact</ALink>
                    </li>
                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                        <ALink className="nav-link" to="blog">Blog</ALink>
                    </li>
                    </>
                    )}
                    
                </ul>
                
                {!localStorage.getItem('token') ?
        <form className="d-flex" role="search">
            
        <Link to='/'><button disabled className="btn btn-outline-warning mx-1 " type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">Events</button></Link>
          <Link to='/signin'><button className="btn btn-outline-warning mx-1 " type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">Login</button></Link>
          <Link to='/signup'><button className="btn btn-outline-warning mx-1" type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">Register now</button></Link>
        </form> :
        <form className="d-flex" role="search">
            
        <Link to='/allevent'><button className="btn btn-outline-warning mx-1 " type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">Events</button></Link>
        <Link to='/profile'><button className="btn btn-outline-warning mx-1 " type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">My Profile</button></Link>
        <button className="btn btn-outline-warning mx-1" onClick={handleLogout}  type="submit" data-bs-toggle="collapse" data-bs-target="#navbarNav">Logout</button>
      </form>}
            </div>
        </div>
    </nav>




  </>
  )
}

export default Navbar
