import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo1.png'

const footer = () => {
  return (
    <>
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Pen down</h5>
            <p>Your happy place !</p>
            <p><i className="fas fa-home mr-3"></i> MNNIT Allahabad, UP, India</p>
            <p><i className="fas fa-envelope mr-3"></i> 15122002suresh@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 8432065012</p>
            <p><i className="fas fa-phone mr-3"></i> +91 7017903175</p>

          </div>
          <div className="col-md-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-upparcase mb-4 fond-weight-bond text-warning">Legal stuff</h5>
            <p> <Link to="/" className="text-white text-decoration-none">Disclaimer</Link></p>
            <p> <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link></p>
            <p> <Link to="/" className="text-white text-decoration-none">Terms of service</Link></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick links</h5>
            <p><Link to="/" className="text-white text-decoration-none">Services</Link></p>
            <p><Link to="/" className="text-white text-decoration-none">Team</Link></p>
            <p><Link to="/" className="text-white text-decoration-none">Contact</Link></p>
            <p><Link to="/" className="text-white text-decoration-none">About us</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >We are here to make sure that you are always happy !</h5>
           <img src={logo} alt='...' width={150}/>
          </div>
 
        </div>

        <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p> Copyright <i className="fa-sharp fa-regular fa-copyright"></i>2023 All rights reserved by:
              <Link to="/" className="text-decoration-none">
                <strong className="text-warning"> BrainZo</strong>
              </Link> </p>
            </div>

             <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-facebook"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-twitter"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-google-plus"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-linkedin-in"></i></Link> 
                  </li>
                  <li className="list-inline-item">
                    <Link to="/" className="btn-floating btn-sm text-white fontsize23px"><i className="fab fa-youtube"></i></Link> 
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

export default footer