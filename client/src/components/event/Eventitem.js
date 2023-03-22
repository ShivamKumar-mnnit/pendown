import React, { useContext } from 'react'
import eventContext from '../../Context/events/EventContext';
import './event.css';
import '../quicknotes/note.css';

const Eventitem = (props) => {
    const context = useContext(eventContext);
    const {deleteEvent}=context;
      const {event, updateEvent} = props;

      
  

  return (
    <>
    
        <div className="col-md-6 d-flex justify-content-center ">

        <div className="card m-2 cbl text-center cardofevent">
  
  <div className="card-body">
    <h2 className="card-title mb-4">{event.title}</h2>
    <p className="card-text"><h4>Description</h4> {event.description}</p>
    <p className="card-text">Organizer : {event.organizer}</p>
    <p className="card-text">Date : {event.datetobeheld}</p>
    <div>
    <a href={event.link} className="card-text" target='_blank' rel='noreferrer'>{event.link}</a>
    </div>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteEvent(event._id);
    props.showAlert("Deleted Succesfully","success");
    }}></i>

<i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateEvent(event);}}></i>

  </div>
</div>

        </div>
      
   </>
  )
}

export default Eventitem
