import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ActivitySummary = ({ activities }) => {
  const recentActivities = activities.slice(-5).reverse();

  const getActivityEmoji = (type) => {
    switch (type) {
      case 'Nap': return '💤';
      case 'Diaper Change': return '🧷';
      case 'Feeding': return '🍼';
      default: return '📝';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-2">
              <span>{getActivityEmoji(activity.type)}</span>
              <span>{activity.type}</span>
              <span className="text-sm text-gray-500">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;