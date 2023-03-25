import React, { useState } from "react";
import EventContext from "./EventContext";
import {BASE_URL} from "../helper"

const EventState = (props) => {
    

    const eventsInitial = []

    const [events, setEvents] = useState(eventsInitial);


    //Get all events for single user
    const getEvents = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/events/fetchallevents`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setEvents(json);

       }

    //Get all events 
    const displayEvents = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/events/displayallevents`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setEvents(json);

       }


    //Add a event
    const addEvent = async (title, description,organizer,datetobeheld,link) => {
        //TODO : API call
        //API call

        const response = await fetch(`${BASE_URL}api/events/addevent`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('token')
                     },
            body: JSON.stringify({title,description,organizer,datetobeheld,link}), 
        });

       
        const event = await response.json();
        setEvents(events.concat(event));
        getEvents(setEvents);

    }


    //Delete a event
    const deleteEvent = async(id) => {
        //API call
        const response = await fetch(`${BASE_URL}api/events/deleteevent/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newEvents = events.filter((event) => { return event._id !== id })
        setEvents(newEvents);

    }


    //Edit a Event
    const editEvent = async (id, title, description,organizer,datetobeheld,link) => {
        //API call

        const response = await fetch(`${BASE_URL}api/events/updateevent/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({title, description,organizer,datetobeheld,link})
        });
const json = await response.json();
console.log(json);
       


        let newEvents = JSON.parse(JSON.stringify(events))
        //logic to edit in client
        for (let index = 0; index < newEvents.length; index++) {
            const element = newEvents[index];
            if (element._id === id) {
                newEvents[index].title = title;
                newEvents[index].description = description;
                newEvents[index].organizer = organizer;
                newEvents[index].datetobeheld = datetobeheld;
                newEvents[index].link = link;
                break;
            }
           
        }
        setEvents(newEvents);
    }


    return (

        <EventContext.Provider value={{ events,setEvents, addEvent, deleteEvent, editEvent,getEvents,displayEvents }}>
            {props.children}
        </EventContext.Provider>

    )
}


export default EventState;