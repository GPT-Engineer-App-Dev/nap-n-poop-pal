import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { format, subDays } from 'date-fns';

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const AnalyticsDashboard = ({ activities }) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => format(subDays(new Date(), i), 'MM/dd'));

  const activityCounts = activities.reduce((acc, activity) => {
    acc[activity.type] = (acc[activity.type] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(activityCounts).map(([name, value]) => ({ name, value }));

  const dailyActivityCounts = last7Days.map(date => {
    const dailyActivities = activities.filter(a => format(new Date(a.timestamp), 'MM/dd') === date);
    return {
      date,
      Nap: dailyActivities.filter(a => a.type === 'Nap').length,
      'Diaper Change': dailyActivities.filter(a => a.type === 'Diaper Change').length,
      Feeding: dailyActivities.filter(a => a.type === 'Feeding').length,
    };
  }).reverse();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Activity Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Daily Activity Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyActivityCounts}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Nap" stroke="#4F46E5" />
                <Line type="monotone" dataKey="Diaper Change" stroke="#10B981" />
                <Line type="monotone" dataKey="Feeding" stroke="#F59E0B" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;