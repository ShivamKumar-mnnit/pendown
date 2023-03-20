import React from 'react'
import profilePic from "../../img/student.avif"
import {Link} from 'react-router-dom';
const student = () => {
  return (
   <>
    <div className='col max-width: 100% height:fit'>

    </div>
    <div className='container emo=profile' >
      <form method="">
        <div className="grid d-flex justify-content-center my-5">
        <div className="card 	#f0ffff-color">
        <div className="row" >
          <div className="col-md-5 ">
            <img src={profilePic} alt="img" class="img-thumbnail"/>
            <button className='btn btn-primary mx-2'>Edit Profile Information</button>
          </div>
          <div className="col-md-6">
            <div className="proflie-head">
                <p className="profile-branch mt-5 mb-1">Name:</p>
                <p className="profile-branch mt-1 mb-1">Branch:</p>
                <p className="profile-year mt-1 mb-1">Year:</p>
                <p className="profile-emailid mt-1 mb-1">email:</p>
                <p className="profile-mobileNumber mt-1 mb-1">+91</p>
            </div>            
          </div> 

           <div className='container mx-2 my-2'>
            <h3>Important Links:</h3>
           </div>
           <div className="proflie-head">
                <p className="profile-link1 mx-2 mt-1.5 mb-1">Link1:</p>
                <p className="profile-link2 mx-2 mt-1.2 mb-1">Link2:</p>
                <p className="profile-link3 mx-2 mt-1.2 mb-1">Link3:</p>
                <p className="profile-link4 mx-2 mt-1.2 mb-3">Link4:</p>               
            </div>  

        </div>
        </div>
        </div>
      </form>
    </div>
   </>
  )
}


export default student