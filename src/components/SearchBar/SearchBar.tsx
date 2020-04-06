import React from 'react';
import './SearchBar.scss';

export interface SearchBarProps {
  value?: any;
  placeholder?: string;
  handleChange?(value: any): void;
}

export const SearchBar = ({ value, handleChange, placeholder }: SearchBarProps) => {
  return (
    <div className='SearchBar Prefix'>
      <span className='SearchBar-Icon'>
        <img className='SearchBar-Image' src='https://www.iconsdb.com/icons/preview/white/search-13-xxl.png' alt='' />
      </span>
      <input className='SearchBar-Input' placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
};
