import React from 'react'
import './event.css';

const Event = () => {
  return (
    <div
       class="bodyevent">
       <h1 class="title text-center py-4 titleofevent">Glass card</h1>
       <div class="row py-5">
        <div class="col-md-6 d-flex justify-content-center">

        <div class="card m-2 cbl text-center cardofevent">
  
  <div class="card-body">

  <span class="card-number fw-bold">04</span>

    <h2 class="card-title mb-4">Asce</h2>




    <p class="card-text">Suresh</p>
    <a href="#" class="btn btn-btn-outline-light btn-warning btnofevent">Go somewhere</a>
  </div>
</div>

        </div>
        <div class="col-md-6 d-flex justify-content-center">
        <div class="cardofevent m-2 cb2 text-center cardofevent">
  
  <div class="card-body">

  <span class="card-number fw-bold">04</span>

    <h2 class="card-title mb-4">Asce</h2>




    <p class="card-text">Suresh</p>
    <a href="#" class="btn btn-btn-outline-light btn-warning btnofevent">Go somewhere</a>
  </div>
</div>
        </div>
       </div>

    </div>
    
  )
}

export default Event
