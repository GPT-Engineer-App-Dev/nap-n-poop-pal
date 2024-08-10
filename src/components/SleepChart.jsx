import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SleepChart = ({ activities }) => {
  const sleepData = activities
    .filter(activity => activity.type === 'Nap')
    .slice(-7) // Get the last 7 nap entries
    .map(activity => ({
      date: new Date(activity.timestamp).toLocaleDateString(),
      duration: activity.duration
    }));

  return (
    <div className="w-full h-64">
      <h3 className="text-lg font-semibold mb-2">Sleep Pattern (Last 7 Naps)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sleepData}>
          <XAxis dataKey="date" />
          <YAxis label={{ value: 'Duration (min)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepChart;