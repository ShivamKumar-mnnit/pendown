import React, { useContext, useState } from "react";
import "./social.css";
import profileContext from "../../Context/profiles/ProfileContext";

const Socialitem = (props) => {
  const { profile } = props;
  const context = useContext(profileContext);
  const { likeProfile, unlikeProfile } = context;

  const [isLiked, setIsLiked] = useState(profile.isLiked || false);

  const handleLikeClick = () => {
    if (!isLiked) {
      likeProfile(profile._id);
      setIsLiked(true);
    } else {
      unlikeProfile(profile._id);
      setIsLiked(false);
    }
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
                  <i className="fa-brands fa-linkedin mx-1"></i>
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
          <span onClick={handleLikeClick}>
            <i
              className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
            ></i>
            {profile.likes ? profile.likes.length:0}
          </span>
        </div>
      </div>
    </>
  );
};

export default Socialitem;
