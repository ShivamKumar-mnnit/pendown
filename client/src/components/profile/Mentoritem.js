import React, { useContext } from 'react'
import profilePic from '../../img/teacher.jpg'
import profileContext from '../../Context/profiles/ProfileContext';

const Mentoritem = (props) => {
  const context = useContext(profileContext);
  const {deleteProfile}=context;
  const {profile, updateProfile} = props;

  return (
    <div>
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
                </div>
                <div className="col-md-6">
                  <div className="proflie-head">
                    <p className="profile-branch mt-3 mb-1 fw-bold">Name:{profile.name}</p>
                    <p className="profile-branch mt-1 mb-1 fw-bold">Branch:{profile.branch}</p>
                    <p className="profile-register mt-1 mb-1 fw-bold">Reg. No.:{profile.regno}</p>
                    <p className="profile-year mt-1 mb-1 fw-bold" >Year:{profile.year}</p>
                    <p className="profile-emailid mt-1 mb-1 fw-bold"><i className="fa-solid fa-envelope"></i>Email:{profile.email}</p>
                    <p className="profile-mobileNumber mt-1 mb-1 fw-bold"><i className="fa-solid fa-mobile"></i>+91{profile.mobile}</p>
                    <p className="profile-year mt-1 mb-1 fw-bold" >Tag: {profile.tag}</p>
                  </div>
      
                </div>
      
                <div className="card mx-5 widthcardstudent">
      <div className="card-body">
      <h5 className="card-title">Bio</h5>
      <p className="card-text">{profile.bio}</p>
      
      </div>
      </div>
      
      
                <div className='container mx-2 my-2'>
                  <h3>Important Links:</h3>
                </div>
      
                <div className="proflie-head">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Resume: </span>
                    </div>
                    {profile.resume}
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-square-github"></i>Github: </span>
                    </div>
                    {profile.github}
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-linkedin"></i>Linkedin: </span>
                    </div>
                    {profile.linkedin}
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Link1: </span>
                    </div>
                    {profile.link1}
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Link2: </span>
                    </div>
                    {profile.link2}
                  </div> 
                </div>
                <div className='container mx-2 my-2'>
                  <h3>Projects Link</h3>
                </div>
                
      
                <div className="proflie-head">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Project 1:  </span>
                    </div>
                    {profile.project1}
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Project 2: </span>
                    </div>
                    {profile.project2}
                  </div>
                  <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteProfile(profile._id);
    props.showAlert("Deleted Succesfully","success");
    }}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateProfile(profile);}}></i>
                  </div>
              </div>       
            </div> 
            <button type="button" className="btn btn-lg btn-warning" disabled></button>
          </div>
        </form>  
      </div>
      </div>
      </div> 
    </div>
  )
}

export default Mentoritem
