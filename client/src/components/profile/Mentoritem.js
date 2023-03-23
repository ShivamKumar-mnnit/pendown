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
          <button type="button" className="btn btn-lg btn-success "  disabled></button>
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
      
                <div class="card container  mx-5" >
  <div class="card-body">
    <h5 class="card-title">Bio</h5>
    <textarea cols="40" rows="8">{profile.bio}</textarea>
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
                    <div className='mx-2 my-1'><a href={profile.resume} alt='...'>{profile.resume}</a></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-square-github"></i>Github: </span>
                    </div>
                    <div className='mx-2 my-1'><a href={profile.github} alt='...'>{profile.github}</a></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa-brands fa-linkedin"></i>Linkedin: </span>
                    </div>
                    <div className='mx-2 my-1'><a href={profile.linkedin} alt='...'>{profile.linkedin}</a></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Link1: </span>
                    </div>
                    <div className='mx-2 my-1'><a href={profile.link1} alt='...'>{profile.link1}</a></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Link2: </span>
                    </div>
                    <div className='mx-2 my-1'><a href={profile.link2} alt='...'>{profile.link2}</a></div>
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
                    <div className='mx-2 my-1'><a href={profile.project1} alt='...'>{profile.project1}</a></div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-default">Project 2: </span>
                    </div>
                    <div className='mx-2 my-1'><a href={profile.project2} alt='...'>{profile.project2}</a></div>
                  </div>
                  <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteProfile(profile._id);
    props.showAlert("Deleted Succesfully","success");
    }}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateProfile(profile);}}></i>
                  </div>
              </div>       
            </div> 
            <button type="button" className="btn btn-lg btn-success" disabled></button>
          </div>
        </form>  
      </div>
      </div>
      </div> 
    </div>
  )
}

export default Mentoritem
