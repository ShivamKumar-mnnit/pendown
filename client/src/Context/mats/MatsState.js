import React, { useState } from "react";
import MatContext from "./MatContext";
import {BASE_URL} from "../helper"

const MatState = (props) => {

    const matsInitial = []

    const [mats, setMats] = useState(matsInitial);


    //Get all mats of one user
    const getMats = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/fetchallmaterials`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setMats(json);

       }

       //Get all mats 
    const displayMats = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/displayallmaterials`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setMats(json);

       }



    //Add a Mat
    const addMat = async (title, description, link) => {
        //TODO : API call
        //API call

        const response = await fetch(`${BASE_URL}api/materials/addmaterial`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('token')
                     },
            body: JSON.stringify({title,description,link}), 
        });

       
        const mat = await response.json();
        setMats(mats.concat(mat));
        getMats(setMats);

    }


    //Delete a Mat
    const deleteMat = async(id) => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/deletematerial/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newMats = mats.filter((mat) => { return mat._id !== id })
        setMats(newMats);

    }


    //Edit a Mat
    const editMat = async (id, title, description, link) => {
        //API call

        const response = await fetch(`${BASE_URL}api/materials/updatematerial/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({title, description, link})
        });
const json = await response.json();
console.log(json);
       


        let newMats = JSON.parse(JSON.stringify(mats))
        //logic to edit in client
        for (let index = 0; index < newMats.length; index++) {
            const element = newMats[index];
            if (element._id === id) {
                newMats[index].title = title;
                newMats[index].description = description;
                newMats[index].link = link;
                break;
            }
           
        }
        setMats(newMats);
    }


    return (

        <MatContext.Provider value={{ mats,setMats, addMat, deleteMat, editMat,getMats,displayMats }}>
            {props.children}
        </MatContext.Provider>

    )
}



export default MatState;