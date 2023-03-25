import React, { useContext, useEffect, useRef,useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import eventContext from '../../Context/events/EventContext';
import Eventitem from '../event/Eventitem';

import '../event/event.css';

const Event = (props) => {

  const navigate = useNavigate();
  const context = useContext(eventContext)
  const { events, displayEvents, editEvent } = context;

  useEffect(() => {
    if(localStorage.getItem('token')){
      displayEvents();
    }
    else{
      navigate("/signin");;
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null);  
  const refClose = useRef(null);  

  const [event,setEvent] = useState({id:"",etitle:"", edescription:"",eorganizer:"",edatetobeheld:"",elink:""});
const [searchTerm, setsearchTerm] = useState("");




  const updateEvent = (currentEvent) => {
    ref.current.click();
    setEvent({id:currentEvent._id, etitle: currentEvent.title, edescription: currentEvent.description , eorganizer : currentEvent.organizer,edatetobeheld : currentEvent.datetobeheld,elink : currentEvent.link});
  }

  
  const handleClick =(e)=>{
    editEvent(event.id,event.etitle,event.edescription,event.eorganizer,event.edatetobeheld,event.elink);
    refClose.current.click();
    props.showAlert("Updated Succesfully","success");

}

const onChange = (e)=>{
    setEvent({...event,[e.target.name]:e.target.value})
}

  return (
    <>

<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
          setsearchTerm(e.target.value);
        }} />
      </form>


     <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Event
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Event</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={event.etitle} onChange={onChange} minLength={5} required  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={event.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="organizer" className="form-label">Organizer</label>
                  <input type="text" className="form-control" id="eorganizer" name='eorganizer' value={event.eorganizer} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="datetobeheld" className="form-label">Date to be held</label>
                  <input type="text" className="form-control" id="edatetobeheld" name='edatetobeheld' value={event.edatetobeheld} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="link" className="form-label">Link</label>
                  <input type="text" className="form-control" id="elink" name='elink' value={event.elink} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={event.etitle.length<5 || event.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Event</button>
            </div>
          </div>
        </div>
      </div>



      <div className="row my-3">
        <div className='d-flex'>
        <h2 className='px-5 cardtext'>All Events and Meets </h2>
        <Link to="addevent"><button className="btn btn-outline-warning ">add your event</button></Link>
        </div>
        <p className='px-5 cardtext'>Only the organizer can edit or delete an event here</p>
        <div className="container mx-2 px-5">
        {events.length===0 && 'No Events to display'}
        </div>




{
        events
        .filter((val)=> {
          if(searchTerm === ""){
            return val;
          }
          else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
          }
          return null;
        })
      
        .sort((a,b) => new Date(b.date) - new Date(a.date)).map((event,_id) => {
          return <Eventitem key={_id} updateEvent={updateEvent}  showAlert={props.showAlert} event={event} />
        })
}


      </div>

    </>
  )
}

export default Event
