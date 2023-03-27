import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../img/logo1.png'
import './footer.css';
import Donate from '../../img/donate.jpg';

import { Link as ALink} from 'react-scroll';

const Footer = () => {
  const location = useLocation();
  return (
    <>
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Pen down</h5>
            <p><i className="fas fa-home mr-3"></i>Your happy place !</p>
            <p><i className="fas fa-envelope mr-3"></i> 1306shivam@gmail.com</p>
            
            {location.pathname === "/" && ( <button type='button' className='btn btn-success donatebutton' data-bs-toggle="modal" data-bs-target="#exampleModal">Donate</button>
)}




<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">

      
  <h1 className="modal-title fs-5" id="exampleModalLabel">Donate</h1>

<br/>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h5 className="modal-title fs-5" id="exampleModalLabel">All the Donatation will be used for hosting and better Servers for website</h5>
<img src={Donate} alt="..." />

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>








          </div>
          <div className="col-md-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-upparcase mb-4 fond-weight-bond text-warning">Legal stuff</h5>
            <p> <Link to="/policies" className="text-white text-decoration-none">Disclaimer</Link></p>
            <p> <Link to="/policies" className="text-white text-decoration-none">Privacy Policy</Link></p>
            <p> <Link to="/policies" className="text-white text-decoration-none">Terms of service</Link></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick links</h5>
            <p><ALink to="services" className="text-white text-decoration-none">Services</ALink></p>
            <p><Link to="/allprofile" className="text-white text-decoration-none">Social</Link></p>
            <p><ALink to="contact" className="text-white text-decoration-none">Contact</ALink></p>
            <p><Link to="/team" className="text-white text-decoration-none">About us</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >We are here to make sure that you are always happy !</h5>
          <Link to='/'> <img src={logo} alt='...' width={150}/></Link>
          </div>
 
        </div>

        <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p> Copyright <i className="fa-sharp fa-regular fa-copyright"></i>2023 All rights reserved by:
              <Link to="/" className="text-decoration-none">
                <strong className="text-warning"> Pen down</strong>
              </Link> </p>
            </div>

             <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="https://www.linkedin.com/in/shivam-kumar-9b2520224/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-linkedin-in"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://github.com/MICKEY-mi" className="btn-floating btn-sm text-white fontsize23px"><i className="fa-brands fa-github"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://instagram.com/shivamkumar6188" className="btn-floating btn-sm text-white fontsize23px"><i className="fa-brands fa-instagram"></i></Link> 
                  </li>
                 
                </ul>
              </div>
             </div>
          </div>
      </div>
    </footer>
    </>
  )
}

export default Footer