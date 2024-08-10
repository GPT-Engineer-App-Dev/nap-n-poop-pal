import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';

const SleepChart = ({ activities }) => {
  const sleepData = activities
    .filter(activity => activity.type === 'Nap')
    .slice(-7) // Get the last 7 nap entries
    .map(activity => ({
      date: format(new Date(activity.timestamp), 'MM/dd'),
      duration: activity.duration
    }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow">
          <p className="font-semibold">{`Date: ${label}`}</p>
          <p>{`Duration: ${payload[0].value} minutes`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-md bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Sleep Pattern (Last 7 Naps)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fill: '#4b5563' }} />
              <YAxis 
                label={{ value: 'Duration (min)', angle: -90, position: 'insideLeft', fill: '#4b5563' }} 
                tick={{ fill: '#4b5563' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="duration" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepChart;