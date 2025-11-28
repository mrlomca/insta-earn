import React from 'react';
import { ToggleProps } from '../types';

export const Toggle: React.FC<ToggleProps> = ({ 
  checked, 
  onChange,
  activeColorClass = 'bg-black'
}) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? activeColorClass : 'bg-gray-200'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        style={{
          transform: checked ? 'translateX(20px)' : 'translateX(0)'
        }}
      />
    </button>
  );
};