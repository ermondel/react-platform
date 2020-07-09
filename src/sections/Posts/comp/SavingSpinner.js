import React from 'react';
import { SpinnerBig } from '../../../util/UtilImg/comp/UtilImg';

const SavingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>
        Saving data to the remote server
      </p>
      <p>Please wait</p>
    </div>
  </div>
);

export default SavingSpinner;
