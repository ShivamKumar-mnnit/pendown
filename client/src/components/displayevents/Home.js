import React from 'react';
import '../event/event.css';
import Event from './event';


const Home = (props) => {
    const {showAlert} = props;
  return (
    <div className='bodyevent px-5 py-5'>
        <Event showAlert={showAlert}/>
    </div>
  )
}

export default Home
