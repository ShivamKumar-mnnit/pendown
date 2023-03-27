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

        <div className="card m-2 cbl text-center cardofevent notecard">
  
  <div className="card-body">
    <h2 className="card-title mb-4 addnote">{note.title}</h2>
    <p className="card-text addnote">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
    props.showAlert("Deleted Succesfully","success");
    }}>D</i>

<i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);}}>E</i>

  </div>
</div>

        </div>
        

   </>
  )
}

export default Noteitem
