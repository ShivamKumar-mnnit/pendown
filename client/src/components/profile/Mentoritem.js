import React, { useContext } from 'react'
import profilePic from '../../img/teacher.jpg'
import profileContext from '../../Context/profiles/ProfileContext';
import profile from '../../img/mentor.jpg'

const Mentoritem = (props) => {
  const context = useContext(profileContext);
  const {deleteProfile}=context;
  const {profile, updateProfile} = props;

  return (
    
    <section class="main-container">
      <div class='container'>
      <div className="grid d-flex justify-content-center my-5">
        <h1 className='text-center mb-5'></h1>
        <div class='row'>
          <div className='.col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>


              <div className='profile-card card rounded p-4 p-x1-5 mb-4 text-center
              position: relative overflow-hidden'>
                <div class='banner'></div>
                <img src="profile" alt='' className='img-circle mx-auto mb-3' />
                <h3 class='mb-4'>Garv Petwal</h3>
                <div class='text-left mb-4'>
                  <p class='mb-2'>
                    <i class='fa fa-envelope mr-2'></i> 1234@gmail.com
                  </p>
                  <p class='mb-2'>
                    <i class='fa fa-phone mr-2'></i>+91 1234567809
                  </p>                 
                  <p class='mb-2'>
                    <i class='fa fa-globe mr-2'></i> mywebsite.com
                  </p>               
                <p class='mb-2'>
                    <i class='fa fa-map-marker-alt mr-2'></i> Banglore
                </p>
               </div>
               <div class='social-links d-flex justify-content-center'>
                <a href='#' class='mx-2'>
                  <img src="" alt='Dribble' />
                </a>
                <a href='#' class='mx-2'>
                  <img src="" alt='LinkedIn' />
                </a>
                <a href='#' class='mx-2'>
                  <img src="" alt='Github' />
                </a>
                <a href='#' class='mx-2'>
                  <img src="" alt='Instagram' />
                </a>

               
                </div>
               </div>
              </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Mentoritem
