import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';


function Spinnerclimb() {
  return <div className='text-center'>
             <ClimbingBoxLoader color={'23F5EE'} loading={true}  size={30} />
  </div>;
}

export default Spinnerclimb;
