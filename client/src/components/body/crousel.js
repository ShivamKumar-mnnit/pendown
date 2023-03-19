import React from 'react'
import './crousel.css'

const crousel = () => {
  return (
    <>
    

    <div id="carouselExampleCaptions" className="carousel slide lowzindex" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active crousel-height">
      <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&w=1000&q=80" className="d-block w-100" alt="#"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='x5'>Clothing For You</h5>
        <p className='x6'>We care about your choice </p>
      </div>
    </div>
    <div className="carousel-item crousel-height">
      <img src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg" className="d-block w-100" alt="#"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='x1'>Electronics</h5>
        <p className='x2'>All your accessories and electronic devics at best deals</p>
      </div>
    </div>
    <div className="carousel-item crousel-height">
      <img src="https://st.depositphotos.com/1063437/2337/i/950/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg" className="d-block w-100" alt="#"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='x3'>Grocery</h5>
        <p className='x4'>Your local grocery shop at your door-step</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </>
  )
}

export default crousel