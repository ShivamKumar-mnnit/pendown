import React, { useState } from "react";
import NoteContext from "./NoteContext";
import {BASE_URL} from "../helper"

const NoteState = (props) => {

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);


    //Get all Notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setNotes(json);

       }



    //Add a Note
    const addNote = async (title, description, tag) => {
        //TODO : API call
        //API call

        const response = await fetch(`${BASE_URL}api/notes/addnote`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('token')
                     },
            body: JSON.stringify({title,description,tag}), 
        });

       
        const note = await response.json();
        setNotes(notes.concat(note));
        getNotes(setNotes);

    }


    //Delete a Note
    const deleteNote = async(id) => {
        //API call
        const response = await fetch(`${BASE_URL}api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);

    }


    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API call

        const response = await fetch(`${BASE_URL}api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({title, description, tag})
        });
const json = await response.json();
console.log(json);
       


        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
           
        }
        setNotes(newNotes);
    }


    return (

        <NoteContext.Provider value={{ notes,setNotes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}



export default NoteState;