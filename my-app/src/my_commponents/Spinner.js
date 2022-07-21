import React from 'react';
import gif from './48x48.gif'
function Spinner() {
  return <div className='text-center'>
        <img src= {gif} alt="loading..." className='text-center' />
  </div>;
}

export default Spinner;
