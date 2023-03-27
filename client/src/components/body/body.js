import React,{ useRef } from 'react'
import { Link } from 'react-router-dom'
import { Link as ALink} from 'react-scroll';
import './css/style.css';
import './css/clash-display.css';
import logo from '../../img/logo1.png';
import icon1 from '../../img/reading.avif';
import icon2 from '../../img/doubt2.png';
import icon3 from '../../img/notesicon3.png';

import emailjs from '@emailjs/browser';


const Body = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3ibnx5m', 'template_7p7532i', form.current, 'zozF20U2SZWw5Z47D')
        .then((result) => {
            console.log('Message send');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>

            <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos="fade-left" className=" text-white fw-semibold display-1">Welcome to Pendown</h1>
                            <h5 className="text-black mt-4 mb-5 fs-4" data-aos="fade-right">Striving for excellence with each and every interaction </h5>
                            <div data-aos="fade-up" data-aos-delay="50">
                              
                                <ALink to="services" className="btn btn-brand me-2">Our Services</ALink>
                                <ALink to="contact" className="btn btn-light me-2">Contact us</ALink>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*about*/}
            <section id="about" className="section-padding aboutbackground">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">About us</h1>
                                <div className="line"></div>
                                <p>We are the team Pendown - ethusiastic , energetic and visionary developers from B.Tech 2nd year (2021-25_Batch) , NIT Allahabad , Uttar Pradesh (India)  </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
                        <img src={logo} alt="" />
                        </div>
                        
                        <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
                            <h1>Features of Pendown</h1>
                            
                            <div className="d-flex pt-4 mb-3">
                                <div className="iconbox me-4 my-1 " ><img src={icon1} alt="#" ></img>
                                    <i className="ri-mail-send-fill"></i>
                                </div>
                                <div>
                                    <h5>Educational Platform</h5>
                                    <p>Exculsively helpful for Engineering Under-graduates</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="iconbox me-4 my-4"><img src={icon2} alt="#" ></img>
                                    <i className="ri-user-5-fill"></i>
                                </div>
                                <div>
                                    <h5>One-to-One interaction</h5>
                                    <p>Solve your doubts by interacting with mentors in a fully fledged-personalised manner through chats & video calls</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="iconbox me-4 my-4"><img src={icon3} alt="#" ></img>
                                    <i className="ri-rocket-2-fill"></i>
                                </div>
                                <div>
                                    <h5>Donate your Notes</h5>
                                    <p>If you believe your handfull of selective study material would be helpful for others ,then feel free to share your notes with us. we'll feature them on our platform and help you reach masses for help and support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" className="section-padding border-top backgroundwhite">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Our Awesome Services</h1>
                                <div className="line"></div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            <div className="service theme-shadow p-lg-5 p-4">
                               
                                <h5 className="mt-4 mb-3">Maintain your Profile</h5>
                                <p>Come join us and maintain your academic & professional profile<br></br>
                             </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                            <div className="service theme-shadow p-lg-5 p-4">
                              
                                <h5 className="mt-4 mb-3">Mentorship</h5>
                                <p>confused about next step towards your career, stucked in academic hotch-potch or need emotional support then talk to our mentors. further, if you want to mentor others then join us as mentor/teacher.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                            <div className="service theme-shadow p-lg-5 p-4">
                              
                                <h5 className="mt-4 mb-3">Quick notes</h5>
                                <p>Found something important to note ?<br></br>generate your quick notes on website itself for further reference with our in-built notes taking app</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                            <div className="service theme-shadow p-lg-5 p-4">
                               
                                <h5 className="mt-4 mb-3">Donate Notes</h5>
                                <p>If you believe your handfull of selective study material would be helpful for others ,<br></br>then feel free to share your notes with us. we'll feature them on our platform and help you reach masses for help and support
</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="550">
                            <div className="service theme-shadow p-lg-5 p-4">
                            
                                <h5 className="mt-4 mb-3">Interactive Classes</h5>
                                <p>Teacher can schedule classes for students and students can request for personalised doubts
                                    and get mentorship through conference video calling feature.
                                </p>
                                <h3 className="mt-4 mb-3">Coming Soon...</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="650">
                            <div className="service theme-shadow p-lg-5 p-4">
                                
                                <h5 className="mt-4 mb-3">Create Events and Meets</h5>
                                <p>Under this section Mentor can Create events, make announcements , declare notices all on the same canvas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="counter" className="section-padding">
                <div className="container text-center">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                            
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                           
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                           
                        </div>
                        <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay="450">
                            
                        </div>
                    </div>
                </div>
            </section>


           





            {/*review*/}
            <section id="reviews" className="section-padding bg-light ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Testimonials</h1>
                                <div className="line"></div>
                                <p>We love to craft digital experiences for brands rather than crap and do crazy skills</p>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-1.jpg" alt="" />
                                    <div className="ms-3">
                                      
                                        <small></small>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-2.jpg" alt="" />
                                    <div className="ms-3">
                                        
                                        <small></small>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-3.jpg" alt="" />
                                    <div className="ms-3">
                                        
                                        <small></small>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-4.jpg" alt="" />
                                    <div className="ms-3">
                                       
                                        <small></small>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-5.jpg" alt="" />
                                    <div className="ms-3">
                                        
                                        <small></small>
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
                                    <p></p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-6.jpg" alt="" />
                                    <div className="ms-3">
                                        
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- TEAM -->*/}
            <section id="team" className="section-padding backgroundwhite">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Team Members</h1>
                                <div className="line"></div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 text-center ">
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-1.jpg" alt="" />
                                </div>
                                <Link to='/team'><div className="team-member-content">
                                    <h4 className="text-white">Shivam Kumar</h4>
                                    <p className="mb-0 text-white">Full stack Developer</p>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 py-5" data-aos="fade-down" data-aos-delay="250">
                            <div className="team-member image-zoom my-3">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-2.jpg" alt="" />
                                </div>
                                <Link to='/team'> <div className="team-member-content">
                                    <h4 className="text-white">Ayush Kumar</h4>
                                 <p className="mb-0 text-white">Frontend & <br></br>Content-management</p>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 py-5" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-3.jpg" alt="" />
                                </div>
                                <Link to='/team'>
                                <div className="team-member-content">
                                    <h4 className="text-white">Garv Petwal</h4>
                                    <p className="mb-0 text-white">Frontend designer</p>
                                </div>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mx-1" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/person-3.jpg" alt="" />
                                </div>
                                <Link to='/team'>
                                <div className="team-member-content">
                                    <h4 className="text-white">Suresh Barkeshiya</h4>
                                    <p className="mb-0 text-white">Frontend designer</p>
                                </div>
                                </Link>
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
                                <p className="text-white">We love to craft digital experiences for brands rather than crap and do crazy skills. We will be happy to help you, Feel free to contact us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="250">
                        <div className="col-lg-8">
                        <form ref={form} onSubmit={sendEmail} className="row g-3 p-lg-5 p-4 bg-white theme-shadow ">
                            
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <button type="submit" value="Send" className='btn btn-warning'>Send</button>
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
                                <p>will be available soon...</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="150">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-1.jpg" alt="" />
                                </div>
                               
                                
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="250">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-2.jpg" alt="" />
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-down" data-aos-delay="350">
                            <div className="team-member image-zoom">
                                <div className="image-zoom-wrapper">
                                    <img src="./assets/images/blog-post-3.jpg" alt="" />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Body
