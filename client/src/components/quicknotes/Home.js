import React from 'react'
import Notes from './Notes';
import './note.css'

const Home = (props) => {
  const {showAlert} = props;
  return (
  <div className='notebackground' id='quicknote'>
        
    <Notes showAlert={showAlert}/>

</div>
  )
}

export default Home
