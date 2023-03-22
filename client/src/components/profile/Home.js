import React from 'react'
import './mentor.css';
import Mentor from './mentor';

const Home = (props) => {
  const {showAlert} = props;
  return (
  <div>
        <Mentor showAlert={showAlert}/>
    

</div>
  )
}

export default Home
