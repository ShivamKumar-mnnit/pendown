import React from 'react'
import './navbar.css';
import logo from '../img/logo-3.png';


const navbar = () => {
  return (
    
    <>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} alt="#" width={150}></img></a>
    <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex">
    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <a className="nav-link active mx-5 hov" aria-current="page" href="/">Your Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-5" aria-current="page" href="/">Quick Notes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-5" aria-current="page" href="/">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-5" aria-current="page" href="/">Testimonials</a>
        </li>

       
      </ul>
      
    </div>
        <button className='btn mx-3'>sign in</button>
        <button className='btn mx-3'>sign up</button>
    </div>
  </div>
</nav>

    
    </>

  )
}

export default navbar
