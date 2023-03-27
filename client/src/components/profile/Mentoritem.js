import React, { useContext } from 'react'
import profileContext from '../../Context/profiles/ProfileContext';
import './Mentoritem.css';
import {Link} from 'react-router-dom';
import Profile from '../../img/profile.webp';

const Mentoritem = (props) => {
  const context = useContext(profileContext);
  const {deleteProfile}=context;
  const {profile, updateProfile} = props;

  return (
  
<div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={Profile} alt=""/>
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {profile.name}
                                    </h5>
                                    <h6>
                                        {profile.tag}
                                    </h6>
                                    <p className="proile-rating">Branch : <span>{profile.branch}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="home-tab" data-toggle="tab" to="/profile" role="tab" aria-controls="home" aria-selected="true">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/allprofile" role="tab" aria-controls="profile" aria-selected="false">Social</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteProfile(profile._id);
    props.showAlert("Deleted Succesfully","success");
    }}>D</i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateProfile(profile);}}>E</i>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>LINKS</p>                            
                            <Link to={profile.linkedin}><i className="fa-brands fa-linkedin"></i> LinkedIn</Link><br/>
                            <Link to={profile.github}><i className="fa-brands fa-github"></i> GitHub</Link><br/>
                            <Link to={profile.link1}><i className="fa-brands fa-instagram"></i> Instagram</Link><br/>
                            <Link to={profile.resume}>Resume</Link><br/>

                            <p>SKILLS</p>
                            <Link to={profile.Project1}><i className="fa-solid fa-link"></i> Project 1</Link><br/>
                            <Link to={profile.project2}><i className="fa-solid fa-link"></i> Project 2</Link><br/>
                            <Link to={profile.link2}><i className="fa-solid fa-link"></i> Link 1</Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Reg. No.</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.regno}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Passing Year</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.year}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>+91 {profile.mobile}</p>
                                            </div>
                                        </div>
                  
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Bio</label>
                                            </div>
                                            <div className="col-md-6">

                                                <textarea disabled cols="25" rows="10" className='areabordernone' value={profile.bio}/>

                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </form>           
        </div>
    
  
  

  )
}

export default Mentoritem
