import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ActivityLog = ({ activities }) => {
  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      {activities.length === 0 ? (
        <p className="text-center text-gray-500">No activities logged yet.</p>
      ) : (
        activities.map((activity) => (
          <div key={activity.id} className="mb-4 p-2 bg-white rounded-lg shadow">
            <p className="font-semibold">{activity.type}</p>
            <p className="text-sm text-gray-600">
              {activity.timestamp.toLocaleString()}
            </p>
            {activity.duration && <p>Duration: {activity.duration} minutes</p>}
            {activity.diaperType && <p>Type: {activity.diaperType}</p>}
            {activity.feedingType && <p>Type: {activity.feedingType}</p>}
            {activity.amount && <p>Amount: {activity.amount} oz</p>}
          </div>
        ))
      )}
    </ScrollArea>
  );
};

export default ActivityLog;