import React from 'react';
import { Button } from '@/components/ui/button';

const DiaperTracker = ({ addActivity }) => {
  const logDiaper = (diaperType) => {
    addActivity({ type: 'Diaper Change', diaperType });
  };

  return (
    <div className="space-y-4">
      <Button onClick={() => logDiaper('Wet')} className="w-full">Wet Diaper</Button>
      <Button onClick={() => logDiaper('Dirty')} className="w-full">Dirty Diaper</Button>
      <Button onClick={() => logDiaper('Both')} className="w-full">Both</Button>
    </div>
  );
};

export default DiaperTracker;