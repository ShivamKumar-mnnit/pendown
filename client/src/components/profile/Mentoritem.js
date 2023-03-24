import React, { useContext } from 'react'
import profileContext from '../../Context/profiles/ProfileContext';
import './Mentoritem.css';
import {Link} from 'react-router-dom';

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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Garv
                                    </h5>
                                    <h6>
                                        Sophomore
                                    </h6>
                                    <p className="proile-rating">Branch : <span>EE</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="home-tab" data-toggle="tab" to="/profile" role="tab" aria-controls="home" aria-selected="true">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/event" role="tab" aria-controls="profile" aria-selected="false">Timeline</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>LINKS</p>                            
                            <Link to="">LinkedIn</Link><br/>
                            <Link to="">GitHub</Link><br/>
                            <Link to="">Resume</Link><br/>

                            <p>SKILLS</p>
                            <Link to="">Project 1</Link><br/>
                            <Link to="">Project 2</Link><br/>
                            <Link to="">Link 1</Link><br/>
                            <Link to="">Link 2</Link>
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
                                                <p>20221202</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Passing Year</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>2025</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>kshitighelani@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>+91 9999999999</p>
                                            </div>
                                        </div>
                  
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Bio</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
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
