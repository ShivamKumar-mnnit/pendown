import React, { useState } from "react";
import MaterialContext from "./MaterialContext";
import {BASE_URL} from "../helper"

const MaterialState = (props) => {
    

    const materialsInitial = []

    const [materials, setMaterials] = useState(materialsInitial);


    //Get all materials for single user
    const getMaterials = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/fetchallmaterials`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setMaterials(json);

       }

    //Get all materials 
    const displayMaterials = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/displayallmaterials`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setMaterials(json);

       }


    //Add a material
    const addMaterial = async (title, description,link) => {
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

       
        const material = await response.json();
        setMaterials(materials.concat(material));
        getMaterials(setMaterials);

    }


    //Delete a material
    const deleteMaterial = async(id) => {
        //API call
        const response = await fetch(`${BASE_URL}api/materials/deletematerial/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newMaterials = materials.filter((material) => { return material._id !== id })
        setMaterials(newMaterials);

    }


    //Edit a Material
    const editMaterial = async (id, title, description,link) => {
        //API call

        const response = await fetch(`${BASE_URL}api/materials/updatematerial/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({title, description,link})
        });
const json = await response.json();
console.log(json);
       


        let newMaterials = JSON.parse(JSON.stringify(materials))
        //logic to edit in client
        for (let index = 0; index < newMaterials.length; index++) {
            const element = newMaterials[index];
            if (element._id === id) {
                newMaterials[index].title = title;
                newMaterials[index].description = description;
                newMaterials[index].link = link;
                break;
            }
           
        }
        setMaterials(newMaterials);
    }


    return (

        <MaterialContext.Provider value={{ materials,setMaterials, addMaterial, deleteMaterial, editMaterial,getMaterials,displayMaterials }}>
            {props.children}
        </MaterialContext.Provider>

    )
}


export default MaterialState;