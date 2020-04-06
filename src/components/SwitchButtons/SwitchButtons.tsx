import './SwitchButtons.scss';
import React from 'react';

export const SwitchButtons = (props: any) => {
  const { focus, handleFocus } = props;
  return (
    <div className='SwitchButtons'>
      <button autoFocus onClick={() => handleFocus(1)} className={focus === 1 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        Movies
      </button>
      <button onClick={() => handleFocus(2)} className={focus === 2 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        TV Shows
      </button>
    </div>
  );
};
