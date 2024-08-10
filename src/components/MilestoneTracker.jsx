import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const MilestoneTracker = () => {
  const [milestones, setMilestones] = useState([]);
  const [newMilestone, setNewMilestone] = useState('');

  const addMilestone = () => {
    if (newMilestone.trim()) {
      setMilestones([
        { id: Date.now(), description: newMilestone, date: new Date() },
        ...milestones
      ]);
      setNewMilestone('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Milestone Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={newMilestone}
              onChange={(e) => setNewMilestone(e.target.value)}
              placeholder="Enter new milestone"
            />
            <Button onClick={addMilestone}>Add</Button>
          </div>
          <ul className="space-y-2">
            {milestones.map((milestone) => (
              <li key={milestone.id} className="flex justify-between items-center">
                <span>{milestone.description}</span>
                <span className="text-sm text-gray-500">
                  {new Date(milestone.date.toDate()).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneTracker;