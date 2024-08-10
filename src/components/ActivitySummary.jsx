import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Milk, Moon, Baby } from 'lucide-react';

const ActivitySummary = ({ activities }) => {
  const recentActivities = activities.slice(0, 5);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'Nap': return <Moon className="h-5 w-5 text-nap" />;
      case 'Diaper Change': return <Baby className="h-5 w-5 text-diaper" />;
      case 'Feeding': return <Milk className="h-5 w-5 text-feeding" />;
      default: return null;
    }
  };

  const getActivityDetails = (activity) => {
    switch (activity.type) {
      case 'Nap':
        return `${activity.duration} minutes`;
      case 'Diaper Change':
        return activity.diaperType;
      case 'Feeding':
        return activity.feedingType;
      default:
        return '';
    }
  };

  return (
    <Card className="shadow-md bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors duration-150 ease-in-out">
              <span className="flex-shrink-0">{getActivityIcon(activity.type)}</span>
              <div className="flex-grow">
                <div className="font-semibold text-gray-800">{activity.type}</div>
                <div className="text-sm text-gray-600">{getActivityDetails(activity)}</div>
              </div>
              <div className="text-sm text-gray-400">
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