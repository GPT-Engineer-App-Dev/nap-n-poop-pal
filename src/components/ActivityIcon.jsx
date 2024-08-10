import React from 'react';
import { Moon, Baby, Milk } from 'lucide-react';

const ActivityIcon = ({ type, className }) => {
  switch (type) {
    case 'Nap':
      return (
        <div className={`p-2 bg-nap text-white rounded-full ${className}`}>
          <Moon className="h-6 w-6" />
        </div>
      );
    case 'Diaper Change':
      return (
        <div className={`p-2 bg-diaper text-white rounded-full ${className}`}>
          <Baby className="h-6 w-6" />
        </div>
      );
    case 'Feeding':
      return (
        <div className={`p-2 bg-feeding text-white rounded-full ${className}`}>
          <Milk className="h-6 w-6" />
        </div>
      );
    default:
      return null;
  }
};

export default ActivityIcon;