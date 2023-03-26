import React,{ useContext, useState } from 'react';
import matContext from '../../Context/mats/MatContext';
import './mat.css';


const AddMat = (props) => {

    const context = useContext(matContext);
    const {addMat} = context;

    const [mat,setMat] = useState({title: "", description: "",link: ""});

    const handleClick =(e)=>{
        e.preventDefault();
        addMat(mat.title,mat.description,mat.link);
        setMat({title:"", description:"",link:""});
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setMat({...mat,[e.target.name]:e.target.value})
    }


  return (
    <div className="container my-3 addmat">
    <h1 className='addmat'>Add Study Material available to your Drive</h1>
    <form>
  <div className="mb-3">
  <label htmlFor="title" className="form-label">*Title</label>
  <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  value={mat.title} onChange={onChange} minLength={5} required  placeholder='Please enter title of atleast 5 character long' />
  </div>
  <div className="mb-3">
  <label htmlFor="description" className="form-label">*Description</label>
  <input type="text" className="form-control" id="description" name='description'  value={mat.description} onChange={onChange} minLength={5} required  placeholder='Please enter description of atleast 5 character long'/>
  </div>
  <div className="mb-3">
  <label htmlFor="link" className="form-label">Link</label>
  <input type="text" className="form-control" id="link" name='link' value={mat.link} onChange={onChange} />
  </div>
  
  
  
  <button disabled={mat.title.length<5 || mat.description.length<5}  type="submit" className="btn btn-success"  onClick={handleClick}>Add Material</button>
  </form>

  
  </div>
  )
}

export default AddMat
