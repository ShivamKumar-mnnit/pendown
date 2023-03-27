import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './signin.css';
import {Link} from 'react-router-dom';
import logo from '../../img/logo1.png';

import {BASE_URL} from "../helper"

const Signin = (props) => {

  const [credentials,setCredentials] = useState({email:"",password:""})

  let navigate = useNavigate();


   const handleSubmit = async(e)=>{
           e.preventDefault();
           
           const response = await fetch(`${BASE_URL}api/auth/login`,{
           method : 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({email:credentials.email,password:credentials.password})
       })
       const json = await response.json();
       
             //save the auth token and redirect
           if(json.success){
           localStorage.setItem('token',json.authtoken);
           navigate("/");
       props.showAlert("Login Succesfully","success");
           }
           else{
             props.showAlert("Invalid Credentials","danger");
           }
   }


   const onChange = (e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
   }





  return (
    <div id="login" className="grid d-flex justify-content-center my-5">
    <div className="card bg-color">
    <form onSubmit={handleSubmit} className='container --bs-light '>
      <div className="text-center">
        <div className="logo "><Link to="/"><img src={logo} alt="#" width={130} /></Link></div>
    <div className='bold my-1 disabled'>Login</div>
    <div className="text-center my-1">New to Pendown? <Link to='/signup'>Signup for free</Link> </div>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email address</label>
      <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password</label>
      <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name='password'/>
      <div id="emailHelp" className="form-text">forgot password?</div>
    </div>
    <button type="submit" className="btn btn-primary mb-3">Login</button>
    <div className="para">By continuing, you agree to Pendown's Conditions of Use and Privacy Notice.</div>
    <Link to='/signup' className='text-decoration-none'><button className='btn btn-primary my-2 d-flex justify-content-center'>Create Your Pendown account</button></Link>
  </form>
  </div>
  </div>

  )
}

export default Signin
