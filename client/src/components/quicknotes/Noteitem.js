import React, { useContext } from 'react'
import noteContext from '../../Context/notes/NoteContext';
import '../event/event.css';
import './note.css';

const Noteitem = (props) => {

  const context = useContext(noteContext);
  const {deleteNote}=context;
    const {note, updateNote} = props;



  return (
   <>
    
        <div className="col-md-6 d-flex justify-content-center ">

        <div className="card m-2 cbl text-center cardofevent">
  
  <div className="card-body">
    <h2 className="card-title mb-4">{note.title}</h2>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
    props.showAlert("Deleted Succesfully","success");
    }}></i>

<i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);}}></i>

  </div>
</div>

        </div>
        
       
   
   
   
   </>
  )
}

export default Noteitem
