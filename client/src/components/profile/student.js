import React from 'react'
import profilePic from "..D:\shopzo\client\src\img\IMG_20190925_211324_289.jpg"
import {Link} from 'react-router-dom';
  
const student = () => {
  return (
   <>
    <div className='container emo=profile'>
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={profilePic} alt="img" />
          </div>
          <div className="col-md-6">
            <div className="proflie-head">
                <p className="profile-branch mt-3 mb-5">"Name: "</p>
                <p className="profile-branch mt-3 mb-5">"Branch: "</p>
                <p className="profile-year mt-3 mb-5">"Year: "</p>

                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Active</a>
                  </li>
                </ul>
            </div>            
          </div> 

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile Information"></input>
            </div>
        </div>
      </form>
    </div>
   </>
  )
}


export default student