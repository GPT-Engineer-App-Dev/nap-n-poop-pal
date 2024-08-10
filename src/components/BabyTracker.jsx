import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ActivityLog from './ActivityLog';
import NapTracker from './NapTracker';
import DiaperTracker from './DiaperTracker';
import FeedingTracker from './FeedingTracker';
import SleepChart from './SleepChart';
import ActivitySummary from './ActivitySummary';
import generateMockData from '../utils/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const BabyTracker = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(generateMockData(14)); // Generate 14 days of mock data
  }, []);

  const addActivity = (activity) => {
    setActivities([{ ...activity, id: Date.now(), timestamp: new Date() }, ...activities]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Baby Activity Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="log">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="log" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Activity Log</TabsTrigger>
              <TabsTrigger value="nap" className="text-sm data-[state=active]:bg-nap data-[state=active]:text-primary-foreground">Nap</TabsTrigger>
              <TabsTrigger value="diaper" className="text-sm data-[state=active]:bg-diaper data-[state=active]:text-primary-foreground">Diaper</TabsTrigger>
              <TabsTrigger value="feeding" className="text-sm data-[state=active]:bg-feeding data-[state=active]:text-primary-foreground">Feeding</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activities.length}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SleepChart activities={activities} />
        <ActivitySummary activities={activities} />
      </div>
    </div>
  );
};

export default BabyTracker;