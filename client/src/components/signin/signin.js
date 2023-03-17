import React from 'react'
import './signin.css';
import logo from '../../img/logo_shopzo.png';
const signin = () => {
  return (
    
    <div className="grid d-flex justify-content-center my-5">
    <div className="card bg-color">
    <form className='container --bs-light '>
      <div className="text-center">
        <div className="logo"><img src={logo} alt="#" /></div>
    <div className='bold my-1 disabled'>Login</div>
    <div className="text-center my-1">New to ShopzO? Signup for free </div>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
      <div id="emailHelp" className="form-text">forgot password?</div>
    </div>
    <button type="submit" className="btn btn-primary mb-3">Login</button>
    <div className="para">By continuing, you agree to ShopzO's Conditions of Use and Privacy Notice.</div>
    <button className='btn btn-primary my-2 d-flex justify-content-center'>Create Your ShopzO account</button>
  </form>
  </div>
  </div>

  )
}

export default signin
