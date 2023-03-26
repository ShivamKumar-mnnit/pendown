import React, { useState } from "react";
import ProfileContext from "./ProfileContext";
import {BASE_URL} from "../helper"

const ProfileState = (props) => {

    const profilesInitial = []

    const [profiles, setProfiles] = useState(profilesInitial);


    //Get your profile
    const getProfiles = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/profiles/fetchprofile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setProfiles(json);

       }

        //Get all profiles 
    const displayProfiles = async () => {
        //API call
        const response = await fetch(`${BASE_URL}api/profiles/displayallprofiles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setProfiles(json);

       }




    //Add a Profile
    const addProfile = async (name,branch,regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2) => {
        //TODO : API call
        //API call

        const response = await fetch(`${BASE_URL}api/profiles/addprofile`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('token')
                     },
            body: JSON.stringify({name,branch,regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2}), 
        });

       
        const profile = await response.json();
        setProfiles(profiles.concat(profile));
        getProfiles(setProfiles);

    }


    //Delete a Profile
    const deleteProfile = async(id) => {
        //API call
        const response = await fetch(`${BASE_URL}api/profiles/deleteprofile/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newProfiles = profiles.filter((profile) => { return profile._id !== id })
        setProfiles(newProfiles);

    }


    //Edit a Profile
    const editProfile = async (id,name,branch,regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2) => {
        //API call

        const response = await fetch(`${BASE_URL}api/profiles/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({name,branch,regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2})
        });
const json = await response.json();
console.log(json);
       


        let newProfiles = JSON.parse(JSON.stringify(profiles))
        //logic to edit in client
        for (let index = 0; index < newProfiles.length; index++) {
            const element = newProfiles[index];
            if (element._id === id) {
                newProfiles[index].name = name;
                newProfiles[index].branch = branch;
                newProfiles[index].regno = regno;
                newProfiles[index].year = year;
                newProfiles[index].email = email;
                newProfiles[index].mobile = mobile;
                newProfiles[index].tag = tag;
                newProfiles[index].bio = bio;
                newProfiles[index].resume = resume;
                newProfiles[index].github = github;
                newProfiles[index].linkedin = linkedin;
                newProfiles[index].link1 = link1;
                newProfiles[index].link2 = link2;
                newProfiles[index].project1 = project2;
                newProfiles[index].project2 = project2;
                break;
            }
           
        }
        setProfiles(newProfiles);
    }


    
   //like a Profile
   const likeProfile = async(id) => {
    //API call
    const response = await fetch(`${BASE_URL}api/profiles/like/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')            }
    });
const json = await response.json();
console.log(json);

setProfiles((prevProfiles) =>
    prevProfiles.map((profile) =>
      profile._id === id ? { ...profile, likes: json.likes } : profile
    )
  );

}
//unlike a Profile
const unlikeProfile = async(id) => {
//API call
const response = await fetch(`${BASE_URL}api/profiles/unlike/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')            }
});
const json = await response.json();
console.log(json);

setProfiles((prevProfiles) =>
    prevProfiles.map((profile) =>
      profile._id === id ? { ...profile, likes: json.likes } : profile
    )
  );
}


    return (

        <ProfileContext.Provider value={{ profiles,setProfiles, addProfile, deleteProfile, editProfile,getProfiles ,displayProfiles,likeProfile,unlikeProfile}}>
            {props.children}
        </ProfileContext.Provider>

    )
}



export default ProfileState;