import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import matContext from '../../Context/mats/MatContext';
import AddMat from './AddMat';
import Matitem from './Matitem';

const Mats = (props) => {

    const navigate = useNavigate();
    const context = useContext(matContext)
    const { mats, getMats, editMat } = context;
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        getMats();
      }
      else{
        navigate("/signin");;
      }
      // eslint-disable-next-line
    }, [])
  
    const ref = useRef(null);  
    const refClose = useRef(null);  
  
    const [mat,setMat] = useState({id:"",etitle:"", edescription:"",elink:""});
  
  
    const updateMat = (currentMat) => {
      ref.current.click();
      setMat({id:currentMat._id, etitle: currentMat.title, edescription: currentMat.description , elink : currentMat.link});
    }
  
    
    const handleClick =(e)=>{
      editMat(mat.id,mat.etitle,mat.edescription,mat.elink);
      refClose.current.click();
      props.showAlert("Updated Succesfully","success");
  
  }
  
  const onChange = (e)=>{
      setMat({...mat,[e.target.name]:e.target.value})
  }

  return (
    <>
    <AddMat showAlert={props.showAlert} />
    <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Material
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Material</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={mat.etitle} onChange={onChange} minLength={5} required  />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="edescription" name='edescription' value={mat.edescription} onChange={onChange} minLength={5} required />
              </div>
              <div className="mb-3">
                <label htmlFor="link" className="form-label">Link</label>
                <input type="text" className="form-control" id="elink" name='elink' value={mat.elink} onChange={onChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button disabled={mat.etitle.length<5 || mat.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Material</button>
          </div>
        </div>
      </div>
    </div>



    <div className="row my-3">
      <h2 className='px-5 addnote'>Your Contributions</h2>
      <div className="container mx-2 px-5">
      {mats.length===0 && 'No Notes to display'}
      </div>
      {mats.sort((a,b) => new Date(b.date) - new Date(a.date)).map((mat,_id) => {
        return <Matitem key={_id} updateMat={updateMat}  showAlert={props.showAlert} mat={mat} />
      })}
    </div>


    <section id="reviews" className="section-padding bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                            <div className="section-title">
                                <h1 className="display-4 fw-semibold">Help Your Peers Now!</h1>
                                <div className="line"></div>
                                <p>Let's go step by step and help everyone </p>                           
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
                                    <p>Upload your notes on Google Drive</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-1.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Upload Notes!!</h5>
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
                                    <p>Give access to Everyone on Drive.</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-2.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>You're almost there.</h5>
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
                                    <p>Share the link to everyone in college</p>
                                </div>
                                <div className="review-person mt-4 d-flex align-items-center">
                                    <img className="rounded-circle" src="./assets/images/avatar-3.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5>Thankyou, for your contribution.</h5>
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                        </div>

  
                        </div>
                    </div>
            </section>        

  </>
  )
}

export default Mats
