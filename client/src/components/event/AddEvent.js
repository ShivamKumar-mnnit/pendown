import React,{ useContext, useState } from 'react'
import eventContext from '../../Context/events/EventContext';
import './event.css';

const AddEvent = (props) => {
    const context = useContext(eventContext);
    const {addEvent} = context;

    const [event,setEvent] = useState({title: "", description: "",organizer: "",datetobeheld: "",link: ""});

    const handleClick =(e)=>{
        e.preventDefault();
        addEvent(event.title,event.description,event.organizer,event.datetobeheld,event.link);
        setEvent({title:"", description:"",organizer:"",datetobeheld:"",link:""});
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setEvent({...event,[e.target.name]:e.target.value})
    }

  return (
    <div className="container my-3">
  <h1 className='cardtext'>Add an Event or Meet</h1>
  <form>
<div className="mb-3">
<label htmlFor="title" className="form-label">*Title </label>
<input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  value={event.title} onChange={onChange} minLength={5} required  placeholder='Please enter title of atleast 5 character long' />
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">*Description</label>
<input type="text" className="form-control" id="description" name='description'  value={event.description} onChange={onChange} minLength={5} required  placeholder='Please enter description of atleast 5 character long'/>
</div>
<div className="mb-3">
<label htmlFor="organizer" className="form-label">Organizer</label>
<input type="text" className="form-control" id="organizer" name='organizer' value={event.organizer} onChange={onChange} placeholder="Enter the name of organizer of Event" />
</div>
<div className="mb-3">
<label htmlFor="datetobeheld" className="form-label">Date to be held</label>
<input type="text" className="form-control" id="datetobeheld" name='datetobeheld' value={event.datetobeheld} onChange={onChange} placeholder="DD/MM/YYYY" />
</div><div className="mb-3">
<label htmlFor="link" className="form-label">*Link</label>
<input type="url" className="form-control" id="link" name='link' value={event.link} onChange={onChange} placeholder="Example: 'http://www.google.com'" />
</div>


<button disabled={event.title.length<5 || event.description.length<5}  type="submit" className="btn btn-success"  onClick={handleClick}>Add Event</button>
</form>
</div>
  )
}

export default AddEvent
