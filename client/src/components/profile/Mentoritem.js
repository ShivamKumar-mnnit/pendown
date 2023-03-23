import React, { useContext } from 'react'
import profilePic from '../../img/teacher.jpg'
import profileContext from '../../Context/profiles/ProfileContext';

const Mentoritem = (props) => {
  const context = useContext(profileContext);
  const {deleteProfile}=context;
  const {profile, updateProfile} = props;

  return (

  )
}

export default Mentoritem
