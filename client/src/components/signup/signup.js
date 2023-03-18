import React from 'react'

import {Link} from 'react-router-dom';


const signup = () => {
  return (
    
    <div className="grid d-flex justify-content-center my-5">
    <div className="card bg-color">
    <form className='container --bs-light '>
      <div className="text-center">
    <div className='bold my-1 disabled'>Sign Up</div>
    <div className="text-center my-1 text-decoration-none "><Link to="/signin">Login here </Link></div>
    </div>
    <div className="row">
  <div className="col">
  <label htmlFor="First name" className="form-label">First Name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div className="col">
    <label htmlFor="Last name" className="form-label">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>
    <div className="mb-2">
      <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='123@example.com'/>
    </div>
    <div className="mb-2">
      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
      <div id="emailHelp" className="form-text">Forgot Password?</div>
    </div>
    <div className="mb-2">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="House/Flat No. and Locality" />
    </div>  
    <div className="mb-2">
    <label htmlFor="inputLandmark" className="form-label">Landmark</label>
    <input type="text" className="form-control" id="inputLandmark" placeholder="Landmark" />
    </div>
    
    <div className='d-flex'>
    <div className="col-md-4 mx-1">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-5 mx-1">
    <label htmlFor="State" className="form-label">State</label>
    <select name="State" id="state" className="form-control">
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
  </div>
  <div className="col-md-2 mx-1">
    <label htmlFor="inputZip" className="form-label">ZIP</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
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

export default signup
