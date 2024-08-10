import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';

const ActivityLog = ({ activities }) => {
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
        return `Duration: ${activity.duration} minutes`;
      case 'Diaper Change':
        return `Type: ${activity.diaperType}`;
      case 'Feeding':
        return `${activity.feedingType}${activity.amount ? ` - Amount: ${activity.amount.toFixed(1)} oz` : ''}`;
      default:
        return '';
    }
  };

  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      {activities.length === 0 ? (
        <p className="text-center text-gray-500">No activities logged yet.</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl">{getActivityEmoji(activity.type)}</div>
              <div className="flex-grow">
                <p className="font-semibold text-lg">{activity.type}</p>
                <p className="text-sm text-gray-600">{getActivityDetails(activity)}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {format(new Date(activity.timestamp), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </ScrollArea>
  );
};

export default ActivityLog;