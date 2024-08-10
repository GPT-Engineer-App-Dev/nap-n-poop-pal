import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

const ActivitySummary = ({ activities }) => {
  const recentActivities = activities.slice(0, 5);

  const getActivityEmoji = (type) => {
    switch (type) {
      case 'Nap': return '💤';
      case 'Diaper Change': return '🧷';
      case 'Feeding': return '🍼';
      default: return '📝';
    }
  };

  const getActivityDetails = (activity) => {
    switch (activity.type) {
      case 'Nap':
        return `${activity.duration} minutes`;
      case 'Diaper Change':
        return activity.diaperType;
      case 'Feeding':
        return activity.feedingType + (activity.amount ? ` (${activity.amount.toFixed(1)} oz)` : '');
      default:
        return '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg">
              <span className="text-2xl">{getActivityEmoji(activity.type)}</span>
              <div className="flex-grow">
                <div className="font-semibold">{activity.type}</div>
                <div className="text-sm text-gray-600">{getActivityDetails(activity)}</div>
              </div>
              <div className="text-sm text-gray-500">
                {format(new Date(activity.timestamp), 'h:mm a')}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;