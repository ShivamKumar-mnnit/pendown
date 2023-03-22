import React from 'react'
import './event.css';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <div
       className="bodyevent">
       <h1 className="title text-center py-4 titleofevent">Events...</h1>
       <div className="row py-5">
        <div className="col-md-6 d-flex justify-content-center">

        <div className="card m-2 cbl text-center cardofevent">
  
  <div className="card-body">

  <span className="card-number fw-bold">04</span>

    <h2 className="card-title mb-4">Asce</h2>




    <p className="card-text">Suresh</p>
    <Link to="/" className="btn btn-btn-outline-light btn-warning btnofevent">Go somewhere</Link>
  </div>
</div>

        </div>
        <div className="col-md-6 d-flex justify-content-center">
        <div className="cardofevent m-2 cb2 text-center cardofevent">
  
  <div className="card-body">

  <span className="card-number fw-bold">04</span>

    <h2 className="card-title mb-4">Asce</h2>




    <p className="card-text">Suresh</p>
    <Link to="/" className="btn btn-btn-outline-light btn-warning btnofevent">Go somewhere</Link>
  </div>
</div>
        </div>
       </div>

    </div>
    
  )
}

export default Event
