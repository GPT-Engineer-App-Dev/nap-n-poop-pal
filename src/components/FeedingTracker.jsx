import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FeedingTracker = ({ addActivity }) => {
  const [feedingType, setFeedingType] = useState('Breast');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedingType === 'Breast' || (feedingType === 'Bottle' && amount)) {
      addActivity({ type: 'Feeding', feedingType, amount: amount ? parseFloat(amount) : null });
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RadioGroup defaultValue="Breast" onValueChange={setFeedingType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Breast" id="breast" />
          <Label htmlFor="breast">Breast</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Bottle" id="bottle" />
          <Label htmlFor="bottle">Bottle</Label>
        </div>
      </RadioGroup>
      {feedingType === 'Bottle' && (
        <div>
          <Label htmlFor="amount">Amount (oz)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="0.5"
          />
        </div>
      )}
      <Button type="submit">Log Feeding</Button>
    </form>
  );
};

export default FeedingTracker;