import React from 'react'
import Mats from './Mats';


const Home = (props) => {
  const {showAlert} = props;
  return (
  <div className='notebackground' id='addmat'>
        
    <Mats showAlert={showAlert}/>

</div>
  )
}

export default Home
