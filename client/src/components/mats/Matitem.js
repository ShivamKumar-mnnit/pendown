import React, { useContext } from 'react'
import matContext from '../../Context/mats/MatContext';
import './mat.css';

const Matitem = (props) => {
    const context = useContext(matContext);
  const {deleteMat}=context;
    const {mat, updateMat} = props;

  return (
    <>
    
        <div className="col-md-6 d-flex justify-content-center  bodymat">

        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{mat.title}</h5>

    <i className="fa-solid fa-trash mx-1 my-1" onClick={()=>{deleteMat(mat._id);
    props.showAlert("Deleted Succesfully","success");
    }}>D</i>

<i className="fa-solid fa-pen-to-square mx-1 my-1" onClick={()=>{updateMat(mat);}}>E</i>
      

    <p class="card-text">{mat.description}</p>
    <a href={mat.link} class="card-link"><i class="fa-solid fa-link"></i>{mat.link}</a>
    
      
    
      

    
 </div>
 

</div>

        </div>
        

   </>
  )
}

export default Matitem
