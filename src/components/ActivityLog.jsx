import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import ActivityIcon from './ActivityIcon';

const ActivityLog = ({ activities }) => {

  const getActivityDetails = (activity) => {
    switch (activity.type) {
      case 'Nap':
        return `Duration: ${activity.duration} minutes`;
      case 'Diaper Change':
        return `Type: ${activity.diaperType}`;
      case 'Feeding':
        return activity.feedingType;
      default:
        return '';
    }
  };

  return (
    <ScrollArea className="h-[400px] w-full rounded-md">
      {activities.length === 0 ? (
        <p className="text-center text-gray-500">No activities logged yet.</p>
      ) : (
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-muted transition-colors duration-150 ease-in-out rounded-lg">
              <ActivityIcon type={activity.type} className="flex-shrink-0" />
              <div className="flex-grow">
                <p className="font-semibold text-gray-800">{activity.type}</p>
                <p className="text-sm text-gray-600">{getActivityDetails(activity)}</p>
              </div>
              <div className="text-sm text-gray-400">
                {format(new Date(activity.timestamp), 'h:mm a')}
              </div>
            </div>
          ))}
        </div>
      )}
    </ScrollArea>
  );
};

export default ActivityLog;