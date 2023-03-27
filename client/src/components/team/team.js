import React from 'react'
import Insta from '../../img/insta.png';
import Linkedin from '../../img/linkedin.png';
import Grp from '../../img/aboutimg.webp';


const Team = () => {
  return (
    <div
    className="bodyaboutus">
  
    <h1 className="title text-center py-4 titleofevent">About us</h1>
    <div className="row py-5">
     <div className="col-md-6 d-flex justify-content-center ">

    <img src={Grp} alt='...'/>

     </div>
     <div className="col-md-6 d-flex justify-content-center ">
     <div className="card m-2 cbl text-center cardofevent bg-white">
  
  <div className="card-body  ">

    <h2 className="card-title">Developers</h2>
  




    <p className="card-text">➢Shivam Kumar <br></br>B.Tech(EE)
   <a href='https://instagram.com/shivamkumar6188' alt="..."> <img src={Insta} alt="#" width={23}></img></a>
   <a href='https://www.linkedin.com/in/shivam-kumar-9b2520224/' alt="..."> <img src={Linkedin} alt="#" width={23}></img></a>
    <br></br>
    ➢Ayush Kumar <br></br>B.Tech(ECE)
    <a href='https://instagram.com/hungry_learner.01' alt="..."> <img src={Insta} alt="#" width={23}></img></a>
    <a href='http://www.linkedin.com/in/ayushkumar2025' alt="..."> <img src={Linkedin} alt="#" width={23}></img></a>
    <br></br>
    ➢Garv Petwal <br></br>B.Tech(EE)
    <a href='https://instagram.com/photos_by_garv' alt="..."> <img src={Insta} alt="#" width={23}></img></a>
    <a href='https://www.linkedin.com/in/garv-petwal-9a6b93252' alt="..."> <img src={Linkedin} alt="#" width={23}></img></a>
    <br></br>
    ➢Suresh Barkeshiya <br></br>B.Tech(EE)
    <a href='https://instagram.com/suresh_barkeshiya_253' alt="..."> <img src={Insta} alt="#" width={23}></img></a>
    <a href='https://www.linkedin.com/in/suresh-kumar-aab4b226a' alt="..."> <img src={Linkedin} alt="#" width={23}></img></a>
    <br></br>

    we are the team pendown ,all from B.Tech 2nd Year , NIT-Allahabad (India)<br></br>
    we as a team always followed a visionary approach and our relentless strivers made this project a grand success.

    
    </p>
    
  </div>
</div>
     </div>
    </div>

 </div>
 
  )
}

export default Team
