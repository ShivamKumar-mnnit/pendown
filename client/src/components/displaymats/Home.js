import React from 'react';
import '../event/event.css';
import Mat from './mat';



const Home = (props) => {
    const {showAlert} = props;
  return (
    <div className='bodymat px-5 py-5'>
        <Mat showAlert={showAlert}/>
    </div>
  )
}

export default Home
