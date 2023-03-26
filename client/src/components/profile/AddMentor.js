import React,{ useContext, useState } from 'react'
import profileContext from '../../Context/profiles/ProfileContext';


const AddMentor = (props) => {
    const context = useContext(profileContext);
    const {addProfile} = context;
    

    const [profile,setProfile] = useState({name: "", branch: "",regno: "",year: "",email: "",mobile: "",tag: "",bio: "",resume: "",github: "",linkedin: "",link1: "",link2: "",project1: "",project2: ""});

    const handleClick =(e)=>{
      e.preventDefault();
      addProfile(profile.name,profile.branch,profile.regno,profile.year,profile.email,profile.mobile,profile.tag,profile.bio,profile.resume,profile.github,profile.linkedin,profile.link1,profile.link2,profile.project1,profile.project2);
      setProfile({name:"", branch:"",regno:"",year:"",email:"",mobile:"",tag:"",bio:"",resume:"",github:"",linkedin:"",link1:"",link2:"",project1:"",project2:""});
      props.showAlert("Added Successfully","success");
  }

  const onChange = (e)=>{
      setProfile({...profile,[e.target.name]:e.target.value})
  }

  return (
    <div className="container my-3">
    <h1>Add a Profile</h1>
    <form>
  <div className="mb-3">
  <label htmlFor="name" className="form-label">*Name </label>
  <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp"  value={profile.name} onChange={onChange} minLength={5} required  placeholder='Please enter name of atleast 5 character long' />
  </div>
  <div className="mb-3">
                <label htmlFor="branch" className="form-label">*branch</label>
                <input type="text" className="form-control" id="branch" name='branch' aria-describedby="emailHelp" value={profile.branch} onChange={onChange}  required  />
              </div>

              <div className="mb-3">
                <label htmlFor="regno" className="form-label">*Registration No.</label>
                <input type="text" className="form-control" id="regno" name='regno' aria-describedby="emailHelp" value={profile.regno} onChange={onChange} minLength={8} required placeholder="please enter your 8 digit registration number"  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="year" className="form-label">*Year of passing</label>
                <input type="text" className="form-control" id="year" name='year' aria-describedby="emailHelp" value={profile.year} onChange={onChange} required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">*Email</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={profile.email} onChange={onChange}  required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">*Mobile no.</label>
                <input type="text" className="form-control" id="mobile" name='mobile' aria-describedby="emailHelp" value={profile.mobile} onChange={onChange}  required  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag/Position</label>
                <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" value={profile.tag} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                <input type="text" className="form-control" id="bio" name='bio' aria-describedby="emailHelp" value={profile.bio} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume</label>
                <input type="text" className="form-control" id="resume" name='resume' aria-describedby="emailHelp" value={profile.resume} onChange={onChange}  />
              </div>

              
              <div className="mb-3">
                <label htmlFor="github" className="form-label">Github</label>
                <input type="text" className="form-control" id="github" name='github' aria-describedby="emailHelp" value={profile.github} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                <input type="text" className="form-control" id="linkedin" name='linkedin' aria-describedby="emailHelp" value={profile.linkedin} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="link1" className="form-label">Instagram</label>
                <input type="text" className="form-control" id="link1" name='link1' aria-describedby="emailHelp" value={profile.link1} onChange={onChange}   />
              </div>
              
              <div className="mb-3">
                <label htmlFor="link2" className="form-label">Link1</label>
                <input type="text" className="form-control" id="link2" name='link2' aria-describedby="emailHelp" value={profile.link2} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="project1" className="form-label">Project1</label>
                <input type="text" className="form-control" id="project1" name='project1' aria-describedby="emailHelp" value={profile.project1} onChange={onChange}  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="project2" className="form-label">Project2</label>
                <input type="text" className="form-control" id="project2" name='project2' aria-describedby="emailHelp" value={profile.project2} onChange={onChange}   />
              </div>

  
  
  <button disabled={profile.name.length<5}  type="submit" className="btn btn-success"  onClick={handleClick}>Add Profile</button>
  </form>
  </div>
  
  )
}

export default AddMentor
