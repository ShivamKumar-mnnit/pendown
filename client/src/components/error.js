
import React from 'react'
import { NavLink } from 'react-router-dom'
import './error.css'
import errorimg from '../img/error_img.jpg'

const error = () => {
  return (
    <>
    <img src={errorimg} alt='#'></img>
    <h1 className='er1' >404 error found</h1>
    <NavLink to="/"><h4 className='er3'>Go Back to Home Page</h4></NavLink>
    </>
  )
}

export default error