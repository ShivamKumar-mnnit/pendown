import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {Link} from 'react-router-dom';


const Signup = (props) => {
  
  const [credentials,setCredentials] = useState({name:"",email:"",password:""});
  let navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {f_name,l_name,email,password,adddress,city,state,zip}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
    method : 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({f_name,l_name,email,password,adddress,city,state,zip})
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
    <form className='container --bs-light '>
      <div className="text-center">
    <div className='bold my-1 disabled'>Sign Up</div>
    <div className="text-center my-1 text-decoration-none "><Link to="/signin">Login here</Link></div>
    </div>
    <div className="row">
  <div className="col">
  <label htmlFor="First name" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder="name" aria-label="name" />
  </div>
</div>
    <div className="mb-2">
      <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Create Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
      <div id="emailHelp" className="form-text">It is recommanded to create a strong password.</div>
    </div>
    
     
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
      By continuing, you agree to ShopzO's Conditions of Use and Privacy Notice.
      </label>
    </div>
  </div>
   
    <Link to='/signup'><button className='btn btn-primary my-2 d-flex justify-content-center'>Sign Up</button></Link>
  </form>
  </div>
  </div>

  )
}

export default Signup
