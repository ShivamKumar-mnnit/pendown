import React, { useContext } from 'react'
import matContext from '../../Context/mats/MatContext';
import './mat.css';

const Matitem = (props) => {
    const context = useContext(matContext);
  const {deleteMat}=context;
    const {mat, updateMat} = props;

  return (
    <>
    
        <div className="col-md-6 d-flex justify-content-center ">

        <div className="card m-2 cbl text-center cardofevent matcard ">
  
  <div className="card-body bgmat">
    <h2 className="card-title mb-4 addnote">{mat.title}</h2>
    <p className="card-text addnote">{mat.description}</p>
    <div>
    <a href={mat.link} className="card-text cardlink" target='_blank' rel='noreferrer'>{mat.link}</a>
    </div>

    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteMat(mat._id);
    props.showAlert("Deleted Succesfully","success");
    }}></i>

<i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateMat(mat);}}></i>

  </div>
</div>

        </div>
        

   </>
  )
}

export default Matitem
