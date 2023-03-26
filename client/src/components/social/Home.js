import React from 'react';
import Social from './social';


const Home = (props) => {
    const {showAlert} = props;
  return (
    <div className='px-5 py-5'>
        <Social showAlert={showAlert}/>
    </div>
  )
}

export default Home
