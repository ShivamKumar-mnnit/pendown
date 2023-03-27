import React, { useContext } from "react";
import "./social.css";
import profileContext from "../../Context/profiles/ProfileContext";

const Socialitem = (props) => {
  const { profile } = props;
  const context = useContext(profileContext);
  const { likeProfile, unlikeProfile } = context;


  const handleLikeClick = () => {
    
      likeProfile(profile._id);
      window.location.reload(); 
      alert('Profile liked');
    
    
  };
  const handleUnLikeClick = () => {
  
      unlikeProfile(profile._id);
      window.location.reload(); 
      alert('Profile unliked')
   
  };

  return (
    <>
      <div className="mx-auto card my-1">
        <div className="ProfileCard">
          <div className="ProfileImages">
            <img src="..." alt="" />
            <img src="..." alt="" />
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
                <span>
                  <a href={profile.linkedin} alt="..."><i className="fa-brands fa-linkedin mx-1"></i></a>
                  <a href={profile.github} alt="..."><i className="fa-brands fa-github mx-1"></i></a>
                  <a href={profile.link1} alt="..."><i className="fa-brands fa-instagram mx-1"></i></a>
                </span>
              </div>

              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>Projects</span>
                  <span>
                    <i className="fa-solid fa-link"></i>Project1
                  </span>
                  <span>
                    <i className="fa-solid fa-link"></i>Project2
                  </span>
                </div>
              </>
            </div>
            <hr />
          </div>
          <span >
            <div onClick={handleLikeClick}>
            <i 
              className="fa-solid fa-heart"
            ></i>like
            </div>
            
            <div onClick={handleUnLikeClick}>
             <i 
              className="fa-regular fa-heart"
            ></i>Unlike
            </div>
            likes : {profile.likes ? profile.likes.length:'0'}
          </span>
         
          
        </div>
      </div>
    </>
  );
};

export default Socialitem;
