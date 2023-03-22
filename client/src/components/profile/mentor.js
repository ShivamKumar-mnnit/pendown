import React from 'react'
import profilePic from "../../img/mentor.jpg"

const mentor = () => {
  return (
    <div>
          
    <div className='img-background-profile'>


<div className="container emo=profile py-5 "  >
  <form method="">
    <div className="grid d-flex justify-content-center my-5">
    <button type="button" className="btn btn-lg btn-warning "  disabled></button>
      <div className="card ">
        <div className="shadow bg-body rounded"></div>
        <div className="row" >
          <div className="col-md-5 ">
            <img src={profilePic} alt="img" className="img-thumbnail" />
            <button className='btn btn-primary my-2 mx-5 '>Edit Profile</button>
          </div>
          <div className="col-md-6">
            <div className="proflie-head">
              <p className="profile-branch mt-3 mb-1 fw-bold">Name:</p>
              <p className="profile-branch mt-1 mb-1 fw-bold">Branch:</p>
              <p className="profile-register mt-1 mb-1 fw-bold">Reg. No.:</p>
              <p className="profile-year mt-1 mb-1 fw-bold" >Year:</p>
              <p className="profile-emailid mt-1 mb-1 fw-bold"><i className="fa-solid fa-envelope"></i>Email:</p>
              <p className="profile-mobileNumber mt-1 mb-1 fw-bold"><i className="fa-solid fa-mobile"></i>+91</p>
              <p className="profile-year mt-1 mb-1 fw-bold" >Tag</p>
            </div>

          </div>

          <div className="card mx-5 widthcardstudent">
<div className="card-body">
<h5 className="card-title">Bio</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

</div>
</div>


          <div className='container mx-2 my-2'>
            <h3>Important Links:</h3>
          </div>

          <div className="proflie-head">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Resume</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-square-github"></i>Github</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-linkedin"></i>Linkedin</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Link</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Link</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div> 
          </div>
          <div className='container mx-2 my-2'>
            <h3>Projects Link</h3>
          </div>
          

          <div className="proflie-head">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Project 1 </span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Project 2</span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            </div>
        </div>       
      </div> 
      <button type="button" className="btn btn-lg btn-warning" disabled></button>
    </div>
  </form>  
</div>
</div>
</div> 
    
  )
}

export default mentor
