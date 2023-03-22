import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css';
import './css/clash-display.css';
import logo from '../../img/logo1.png';


const Body = () => {



    return (
        <>

            <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos="fade-left" className="text-uppercase text-white fw-semibold display-1">Welcome to Pendown</h1>
                            <h5 className="text-white mt-3 mb-4" data-aos="fade-right">WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP</h5>
                            <div data-aos="fade-up" data-aos-delay="50">
                                <Link to="#" className="btn btn-brand me-2">Get Started</Link>
                                <Link to="#" className="btn btn-light ms-2">Our Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*about*/}
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">About us</h1>
                                <div className="line"></div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe necessitatibus ipsa exercitationem rem excepturi totam molestias cumque odio, corporis aut amet doloribus, illum laudantium id minus? Repellendus explicabo inventore eos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
                            <img src={logo} alt="" />
                        </div>
                        <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
                            <h1>About Pendown</h1>
                            <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo reiciendis ad.</p>
                            <div className="d-flex pt-4 mb-3">
                                <div className="iconbox me-4">
                                    <i className="ri-mail-send-fill"></i>
                                </div>
                                <div>
                                    <h5>We are Awesome</h5>
                                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="iconbox me-4">
                                    <i className="ri-user-5-fill"></i>
                                </div>
                                <div>
                                    <h5>We are Awesome</h5>
                                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="iconbox me-4">
                                    <i className="ri-rocket-2-fill"></i>
                                </div>
                                <div>
                                    <h5>We are Awesome</h5>
                                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" className="section-padding border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Awesome Services</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-pen-nib-fill"></i>
                                </div>
                                <h5 className="mt-4 mb-3">UX Design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-stack-fill"></i>
                                </div>
                                <h5 className="mt-4 mb-3">UI Design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-ruler-2-fill"></i>
                                </div>
                                <h5 className="mt-4 mb-3">Logo Design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-pie-chart-2-fill"></i>
                                </div>
                                <h5 className="mt-4 mb-3">Digital Marketing</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="550">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-code-box-line"></i>
                                </div>
                                <h5 className="mt-4 mb-3">Machine Learning</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="650">
                            <div className="service theme-shadow p-lg-5 p-4">
                                <div className="iconbox">
                                    <i className="ri-user-2-fill"></i>
                                </div>
                                <h5 className="mt-4 mb-3">UX Design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="counter" className="section-padding">
                <div className="container text-center">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            <h1 className="text-white display-4">90,00+</h1>
                            <h6 className="text-uppercase mb-0 text-white mt-3">Total Downloads</h6>
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                            <h1 className="text-white display-4">58K+</h1>
                            <h6 className="text-uppercase mb-0 text-white mt-3">Trusted Clients</h6>
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                            <h1 className="text-white display-4">5M+</h1>
                            <h6 className="text-uppercase mb-0 text-white mt-3">THemes Designed</h6>
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                            <h1 className="text-white display-4">100+</h1>
                            <h6 className="text-uppercase mb-0 text-white mt-3">Team Members</h6>
                        </div>
                    </div>
                </div>
            </section>


            <section id="portfolio" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Our Portfolio</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
                            <div className="portfolio-item image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-1.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-1.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                            <div className="portfolio-item image-zoom mt-4">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-2.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-2.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
                            <div className="portfolio-item image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-3.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-3.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                            <div className="portfolio-item image-zoom mt-4">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-4.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-4.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
                            <div className="portfolio-item image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-5.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-5.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                            <div className="portfolio-item image-zoom mt-4">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/project-6.jpg" alt="" />
                                </div>
                                <Link to="./assets/images/project-6.jpg" data-fancybox="gallery" className="iconbox"><i className="ri-search-2-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/*review*/}
            <section id="reviews" className="section-padding bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Testimonials</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-1.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-2.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-3.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-4.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="550">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-5.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="650">
                            <div className="review">
                                <div className="review-head p-4 bg-white theme-shadow">
                                    <div className="text-warning">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <p>Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-6.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Dianne Russell</h5>
                                        <small>UX Architect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- TEAM -->*/}
            <section id="team" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Team Members</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 text-center ">
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-1.jpg" alt="" />
                                </div>
                                <div className="team-member-content">
                                    <h4 className="text-white">Jon Doe</h4>
                                    <p className="mb-0 text-white">Webflow Artist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 py-5" data-aos="fade-down" data-aos-delay="250">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-2.jpg" alt="" />
                                </div>
                                <div className="team-member-content">
                                    <h4 className="text-white">Jon Doe2</h4>
                                    <p className="mb-0 text-white">Webflow Artist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 py-5" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-3.jpg" alt="" />
                                </div>
                                <div className="team-member-content">
                                    <h4 className="text-white">Jon Doe</h4>
                                    <p className="mb-0 text-white">Webflow Artist</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mx-1" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-3.jpg" alt="" />
                                </div>
                                <div className="team-member-content">
                                    <h4 className="text-white">Jon Doe</h4>
                                    <p className="mb-0 text-white">Webflow Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- CONTACT -->*/}
            <section className="section-padding bg-light" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 text-white fw-semibold">Get in touch</h1>
                                <div className="line bg-white"></div>
                                <p className="text-white">We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="250">
                        <div className="col-lg-8">
                            <form action="#" className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                                <div className="form-group col-lg-6">
                                    <input type="text" className="form-control" placeholder="Enter first name" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="text" className="form-control" placeholder="Enter last name" />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="email" className="form-control" placeholder="Enter Email address" />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="text" className="form-control" placeholder="Enter subject" />
                                </div>
                                <div className="form-group col-lg-12">
                                    <textarea name="message" rows="5" className="form-control" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="form-group col-lg-12 d-grid">
                                    <button className="btn btn-brand">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- BLOG -->*/}
            <section id="blog" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Recent News & Articles</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiances for brands rather than crap and more lorem ipsums and do crazy skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-1.jpg" alt="" />
                                </div>
                                <h5 className="mt-4">Web Design 2022</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-2.jpg" alt="" />
                                </div>
                                <h5 className="mt-4">Web Design 2022</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-3.jpg" alt="" />
                                </div>
                                <h5 className="mt-4">Web Design 2022</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Body
