import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { Bottle, Moon, Baby } from 'lucide-react';

const ActivityLog = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'Nap': return <Moon className="h-5 w-5 text-blue-500" />;
      case 'Diaper Change': return <Baby className="h-5 w-5 text-green-500" />;
      case 'Feeding': return <Bottle className="h-5 w-5 text-yellow-500" />;
      default: return null;
    }
  };

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
            <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
              <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
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