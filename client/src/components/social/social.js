import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import profileContext from '../../Context/profiles/ProfileContext';
import Socialitem from './Socialitem';

import './social.css';

const Social = (props) => {
    const navigate = useNavigate();
    const context = useContext(profileContext)
    const { profiles, displayProfiles } = context;
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        displayProfiles();
      }
      else{
        navigate("/signin");;
      }
      // eslint-disable-next-line
    }, [])
  
 
    
   
   const [searchTerm, setsearchTerm] = useState("");

   


  return (
    <>
    <Link to="/profile"><button className="btn btn-outline-warning my-2">My Profile</button></Link>
    <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
              setsearchTerm(e.target.value);
            }} />
          </form>
    
          <div className="row my-3">
            <div className='d-flex'>
            <h2 className='px-5 cardtext'>All Users </h2>
            
            </div>
            <div className="container mx-2 px-5">
            {profiles.length===0 && 'No Users to display'}
            </div>
    
    
    
    
    {
            profiles
            .filter((val)=> {
              if(searchTerm === ""){
                return val;
              }
              else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
              }
              return null;
            })
          
            .sort((a,b) => new Date(b.date) - new Date(a.date)).map((profile,_id) => {
              return <Socialitem key={_id}  showAlert={props.showAlert} profile={profile} />
            })
    }
      
          </div>
    
        </>
  )
}

export default Social
