import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {Link} from 'react-router-dom';

import {BASE_URL} from "../helper"


const Signup = (props) => {
  
  const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});

   let navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch(`${BASE_URL}api/auth/createuser`,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    })
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/");
        props.showAlert("Account Created Succesfully","success");
    }
    else{
        props.showAlert("Invalid Credentials","danger");
    }
}

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
     }
  
  
  
  return (  
    <div className="grid d-flex justify-content-center my-5">
    <div className="card bg-color">
    <form onSubmit={handleSubmit} className='container --bs-light '>
      <div className="text-center">
    <div className='bold my-1 disabled'>Sign Up</div>
    <div className="text-center my-1 text-decoration-none "><Link to="/signin">Login here</Link></div>
    </div>
    <div className="row">
  <div className="col">
  <label htmlFor="First name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="name" aria-label="name" required />
  </div>
</div>
    <div className="mb-2">
      <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email address</label>
      <input type="email" className="form-control" id="email" name='email' onChange={onChange} required aria-describedby="emailHelp" placeholder='email'/>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Create Password</label>
      <input type="password" className="form-control" id="password" name="password" onChange={onChange} minlenght={8} required placeholder='password should be atleast 8 character long' />
      <div id="emailHelp" className="form-text">It is recommanded to create a strong password.</div>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Confirm Password</label>
      <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minlenght={8} required />
      
    </div>
     
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
      By continuing, you agree to Pendown's Conditions of Use and Privacy Notice.
      </label>
    </div>
  </div>
   
    <button type="submit" className='btn btn-primary my-2 d-flex justify-content-center'>Sign Up</button>
  </form>
  </div>
  </div>

  )
}

export default Signup
