import React from 'react'
import './social.css'

const Socialitem = (props) => {
    const {profile} = props;

    


  return (
    <>
<div className='mx-auto card mx-1'>
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src='...' alt="" />
        <img src='...' alt="" />
      </div>

      <div className="ProfileName">
        <span>{profile.name}</span>
        <span>{profile.tag}</span>
        <span>{profile.bio}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{profile.year}</span>
            <span>{profile.branch}</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>Social</span>
            <span><i className="fa-brands fa-linkedin mx-1"></i>
            <i className="fa-brands fa-github mx-1"></i>
            <i className="fa-brands fa-instagram mx-1"></i>
            </span>
          </div>

          
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>Projects</span>
                <span>
                <i className="fa-solid fa-link"></i>Link1
                </span>
                <span>
                <i className="fa-solid fa-link"></i>Link1
                </span>
              </div>
            </>
                  </div>
        <hr />
      </div>
    <span> Likes</span>
    </div>
    </div>


</>
  )
}

export default Socialitem
