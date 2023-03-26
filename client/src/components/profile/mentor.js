import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import profileContext from '../../Context/profiles/ProfileContext';
import AddMentor from './AddMentor';
import Mentoritem from './Mentoritem';


const Mentor = (props) => {
  const navigate = useNavigate();
  const context = useContext(profileContext)
  const { profiles, getProfiles, editProfile } = context;


  useEffect(() => {
    if(localStorage.getItem('token')){
      getProfiles();
    }
    else{
      navigate("/signin");;
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null);  
  const refClose = useRef(null);  

  const [profile,setProfile] = useState({id:"",ename:"", ebranch:"",eregno:"",eyear:"",eemail:"",emobile:"",etag:"",ebio:"",eresume:"",egithub:"",elinkedin:"",elink1:"",elink2:"",eproject1:"",eproject2:""});


  const updateProfile = (currentProfile) => {
    ref.current.click();
    setProfile({id:currentProfile._id, ename: currentProfile.name,ebranch: currentProfile.branch,eregno: currentProfile.regno,eyear: currentProfile.year,eemail: currentProfile.email,emobile: currentProfile.mobile,etag: currentProfile.tag,ebio: currentProfile.bio,eresume: currentProfile.resume,egithub: currentProfile.github,elinkedin: currentProfile.linkedin,elink1: currentProfile.link1,elink2: currentProfile.link2,eproject1: currentProfile.project1,eproject2: currentProfile.project2});
  }

  
  const handleClick =(e)=>{
    editProfile(profile.id,profile.ename,profile.ebranch,profile.eregno,profile.eyear,profile.eemail,profile.emobile,profile.etag,profile.ebio,profile.eresume,profile.egithub,profile.elinkedin,profile.elink1,profile.elink2,profile.eproject1,profile.eproject2);
    refClose.current.click();
    props.showAlert("Updated Succesfully","success");

}

const onChange = (e)=>{
    setProfile({...profile,[e.target.name]:e.target.value})
}



  return (
    <>
    {profiles.length===0 && <AddMentor  showAlert={props.showAlert}/> }
    <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Profile
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="ename" name='ename' aria-describedby="emailHelp" value={profile.ename} onChange={onChange} minLength={5} required  />
              </div>
              
              
              <div className="mb-3">
                <label htmlFor="branch" className="form-label">branch</label>
                <input type="text" className="form-control" id="ebranch" name='ebranch' aria-describedby="emailHelp" value={profile.ebranch} onChange={onChange}  required  />
              </div>

              <div className="mb-3">
                <label htmlFor="regno" className="form-label">Registration No.</label>
                <input type="text" className="form-control" id="eregno" name='eregno' aria-describedby="emailHelp" value={profile.eregno} onChange={onChange} minLength={8} required placeholder="please enter your 8 digit registration number"  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="year" className="form-label">Year of passing</label>
                <input type="text" className="form-control" id="eyear" name='eyear' aria-describedby="emailHelp" value={profile.eyear} onChange={onChange} required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="eemail" name='eemail' aria-describedby="emailHelp" value={profile.eemail} onChange={onChange}  required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile no.</label>
                <input type="text" className="form-control" id="emobile" name='emobile' aria-describedby="emailHelp" value={profile.emobile} onChange={onChange}  required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name='etag' aria-describedby="emailHelp" value={profile.etag} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                
                <textarea name="ebio" id="ebio" cols="30" rows="10" value={profile.ebio} placeholder="bio" onChange={onChange}></textarea>
              </div>
              
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume</label>
                <input type="text" className="form-control" id="eresume" name='eresume' aria-describedby="emailHelp" value={profile.eresume} onChange={onChange}  />
              </div>

              
              <div className="mb-3">
                <label htmlFor="github" className="form-label">Github</label>
                <input type="text" className="form-control" id="egithub" name='egithub' aria-describedby="emailHelp" value={profile.egithub} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                <input type="text" className="form-control" id="elinkedin" name='elinkedin' aria-describedby="emailHelp" value={profile.elinkedin} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="link1" className="form-label">Instagram</label>
                <input type="text" className="form-control" id="elink1" name='elink1' aria-describedby="emailHelp" value={profile.elink1} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="link2" className="form-label">Link1</label>
                <input type="text" className="form-control" id="elink2" name='elink2' aria-describedby="emailHelp" value={profile.elink2} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="project1" className="form-label">Project1</label>
                <input type="text" className="form-control" id="eproject1" name='eproject1' aria-describedby="emailHelp" value={profile.eproject1} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="project2" className="form-label">Project2</label>
                <input type="text" className="form-control" id="eproject2" name='eproject2' aria-describedby="emailHelp" value={profile.eproject2} onChange={onChange}   />
              </div>






            </form>
          </div>
          <div className="modal-footer">
            <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button disabled={profile.ename.length<5 || profile.eregno.length<8} onClick={handleClick} type="button" className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>


    <div className="container row my-3 mx-auto">
        <h2 className='px-5'>My Profile</h2>
        <div className="container mx-2 px-5">
        {profiles.length===0 && 'No Profile to display'}
        </div>
        {profiles.map((profile,_id) => {
          return <Mentoritem key={_id} updateProfile={updateProfile}  showAlert={props.showAlert} profile={profile} />
        })}
      </div>

      <section id="reviews" className="section-padding bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Profile Building</h1>
                                <div className="line"></div>
                                <p>Let's go step by step and build your profile.</p>                           
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Get easy access to all your links</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-1.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Upload your Links Now!!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Maintain all your data at one place.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-2.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Let's edit your profile</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Tell your peers about yourself</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-3.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Update your Bio Now!</h5>
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                        </div>

  
                        </div>
                    </div>
            </section>        
  </>
    
  )
}

export default Mentor
