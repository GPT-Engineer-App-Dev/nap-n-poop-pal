import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ActivityLog from './ActivityLog';
import NapTracker from './NapTracker';
import DiaperTracker from './DiaperTracker';
import FeedingTracker from './FeedingTracker';
import SleepChart from './SleepChart';
import ActivitySummary from './ActivitySummary';

const BabyTracker = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, { ...activity, id: Date.now(), timestamp: new Date() }]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Baby Activity Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="log">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="log">Activity Log</TabsTrigger>
              <TabsTrigger value="nap">Nap</TabsTrigger>
              <TabsTrigger value="diaper">Diaper</TabsTrigger>
              <TabsTrigger value="feeding">Feeding</TabsTrigger>
            </TabsList>
            <TabsContent value="log">
              <ActivityLog activities={activities} />
            </TabsContent>
            <TabsContent value="nap">
              <NapTracker addActivity={addActivity} />
            </TabsContent>
            <TabsContent value="diaper">
              <DiaperTracker addActivity={addActivity} />
            </TabsContent>
            <TabsContent value="feeding">
              <FeedingTracker addActivity={addActivity} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SleepChart activities={activities} />
        <ActivitySummary activities={activities} />
      </div>
    </div>
  );
};

export default BabyTracker;