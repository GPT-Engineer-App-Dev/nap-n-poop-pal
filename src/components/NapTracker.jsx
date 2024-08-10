import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const NapTracker = ({ addActivity }) => {
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duration) {
      addActivity({ type: 'Nap', duration: parseInt(duration) });
      setDuration('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="napDuration">Nap Duration (minutes)</Label>
        <Input
          id="napDuration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter nap duration"
          min="1"
        />
      </div>
      <Button type="submit">Log Nap</Button>
    </form>
  );
};

export default NapTracker;