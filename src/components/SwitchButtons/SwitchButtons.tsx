import './SwitchButtons.scss';
import React from 'react';

export const SwitchButtons = (props: any) => {
  const { focus, handleFocus } = props;
  return (
    <div className='SwitchButtons'>
      <button autoFocus onClick={() => handleFocus(1)} className='ButtonItem'>
        Movies
      </button>
      <button onFocus={() => handleFocus(2)} className='ButtonItem'>
        TV Shows
      </button>
    </div>
  );
};
