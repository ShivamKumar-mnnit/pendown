import React from 'react'
import profilePic from "../../img/student.avif"
import bgImage from "../../img/background.jpg"
import {Link} from 'react-router-dom';
const student = () => {
  return (
   <>
    <div className='img-background'>
        <img src={bgImage} alt="img" class="img-bg"/>
        <style>
            height: 100%
         </style>       
    </div>
 
    <div className="container emo=profile" >
      <form method="">
        <div className="grid d-flex justify-content-center my-5">
        <div className="card 	#f0ffff-color">
        <div class="shadow bg-body rounded"></div>
        <div className="row" >
          <div className="col-md-5 ">
            <img src={profilePic} alt="img" class="img-thumbnail"/>
            <button className='btn btn-primary my-2 mx-2'>Edit Profile Information</button>
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

          <div className='bio mx-2 my-1'>
            <h3>About:</h3>          
            <p>
              fewgyf ewfi hifgej gealej rojg gggggg gg ggg gg ggg gg gggg gg ggg ggggg gggg ggggggg ggggg gggggggg
            </p>
          </div>

           <div className='container mx-2 my-2'>
            <h3>Important Links:</h3>
           </div>




           <div className="proflie-head">
           <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Link 1</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div> 
            <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Link 2</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>  
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Link 3</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div> 
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Link 4</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Link 5</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>                 
           <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Link 6</span>              
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
          </div> 
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