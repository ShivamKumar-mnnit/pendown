import React from 'react'
import Grp from '../../img/grp.jpg';

const Team = () => {
  return (
    <div
    className="bodyaboutus">
    <h1 className="title text-center py-4 titleofevent">About us</h1>
    <div className="row py-5">
     <div className="col-md-6 d-flex justify-content-center">

    <img src={Grp} alt='...'/>

     </div>
     <div className="col-md-6 d-flex justify-content-center">
     <div className="card m-2 cbl text-center cardofevent">
  
  <div className="card-body">

    <h2 className="card-title ">title</h2>




    <p className="card-text">Desc............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
    
  </div>
</div>
     </div>
    </div>

 </div>
 
  )
}

export default Team