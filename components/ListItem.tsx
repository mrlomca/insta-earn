import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ListItemProps } from '../types';

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  label,
  subLabel,
  rightElement,
  onClick,
  hasChevron = true,
}) => {
  return (
    <div 
      className="flex items-center justify-between py-4 px-4 active:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 flex-1 overflow-hidden">
        <div className="text-gray-900 shrink-0">
          {icon}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[15px] font-normal text-gray-900 leading-tight truncate">
            {label}
          </span>
          {subLabel && (
            <div className="text-[13px] text-gray-500 font-normal leading-snug mt-0.5 break-words whitespace-normal pr-2">
              {subLabel}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 shrink-0">
        {rightElement}
        {hasChevron && (
          <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
        )}
      </div>
    </div>
  );
};