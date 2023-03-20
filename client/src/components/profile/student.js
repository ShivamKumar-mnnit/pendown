import React from 'react'
import profilePic from "../../img/student.avif"
import bgImage from "../../img/background.jpg"
import { Link } from 'react-router-dom';
import './student.css';
const student = () => {
  return (
    <div className='img-background-profile'>


      <div className="container emo=profile py-5 " >
        <form method="">
          <div className="grid d-flex justify-content-center my-5">
            <div className="card ">
              <div class="shadow bg-body rounded"></div>
              <div className="row" >
                <div className="col-md-5 ">
                  <img src={profilePic} alt="img" class="img-thumbnail" />
                  <button className='btn btn-primary my-2 mx-5'>Edit Profile</button>
                </div>
                <div className="col-md-6">
                  <div className="proflie-head">
                    <p className="profile-branch mt-5 mb-1 fw-bold">Name:</p>
                    <p className="profile-branch mt-1 mb-1 fw-bold">Branch:</p>
                    <p className="profile-register mt-1 mb-1 fw-bold">Reg. No.:</p>
                    <p className="profile-year mt-1 mb-1 fw-bold" >Year:</p>
                    <p className="profile-emailid mt-1 mb-1 fw-bold"><i class="fa-solid fa-envelope"></i>Email:</p>
                    <p className="profile-mobileNumber mt-1 mb-1 fw-bold"><i class="fa-solid fa-mobile"></i>+91</p>
                  </div>
                </div>

                <div class="card mx-5 widthcardstudent">
  <div class="card-body">
    <h5 class="card-title">Bio</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>


                <div className='container mx-2 my-2'>
                  <h3>Important Links:</h3>
                </div>

                <div className="proflie-head">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Resume</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Github</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">LinkedIn</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Link</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Link</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div> 
                </div>
                <div className='container mx-2 my-2'>
                  <h3>Projects Link</h3>
                </div>
                

                <div className="proflie-head">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Project 1 </span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">Project 2</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  </div>

              </div>
            </div>
        <button className='btn btn-warning'>save</button>
          </div>
        </form>
      </div>







    </div>


  )
}


export default student