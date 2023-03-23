import React,{ useContext, useState } from 'react'
import noteContext from '../../Context/notes/NoteContext'
import './note.css'

function AddNote(props) {
    
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title: "", description: "",tag: ""});

    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"", description:"",tag:""});
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
  <div className="container my-3 addnote">
  <h1 className='addnote'>Add a Note</h1>
  <form>
<div className="mb-3">
<label htmlFor="title" className="form-label">*Title</label>
<input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  value={note.title} onChange={onChange} minLength={5} required  placeholder='Please enter title of atleast 5 character long' />
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">*Description</label>
<input type="text" className="form-control" id="description" name='description'  value={note.description} onChange={onChange} minLength={5} required  placeholder='Please enter description of atleast 5 character long'/>
</div>
<div className="mb-3">
<label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
</div>



<button disabled={note.title.length<5 || note.description.length<5}  type="submit" className="btn btn-success"  onClick={handleClick}>Add Note</button>
</form>
</div>

  )
}

export default AddNote