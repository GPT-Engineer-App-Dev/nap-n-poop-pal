import { subDays, subHours, subMinutes } from 'date-fns';

const generateMockData = (days = 7) => {
  const activities = [];
  const now = new Date();

  for (let i = 0; i < days; i++) {
    const day = subDays(now, i);

    // Generate 2-4 naps per day
    const napsCount = 2 + Math.floor(Math.random() * 3);
    for (let j = 0; j < napsCount; j++) {
      activities.push({
        id: activities.length + 1,
        type: 'Nap',
        duration: 30 + Math.floor(Math.random() * 90),
        timestamp: subMinutes(day, Math.random() * 1440),
      });
    }

    // Generate 6-8 diaper changes per day
    const diaperChangesCount = 6 + Math.floor(Math.random() * 3);
    for (let j = 0; j < diaperChangesCount; j++) {
      activities.push({
        id: activities.length + 1,
        type: 'Diaper Change',
        diaperType: ['Wet', 'Dirty', 'Both'][Math.floor(Math.random() * 3)],
        timestamp: subMinutes(day, Math.random() * 1440),
      });
    }

    // Generate 6-8 feedings per day
    const feedingsCount = 6 + Math.floor(Math.random() * 3);
    for (let j = 0; j < feedingsCount; j++) {
      const feedingType = Math.random() > 0.5 ? 'Breast' : 'Bottle';
      activities.push({
        id: activities.length + 1,
        type: 'Feeding',
        feedingType,
        amount: feedingType === 'Bottle' ? 2 + Math.random() * 4 : null,
        timestamp: subMinutes(day, Math.random() * 1440),
      });
    }
  }

  return activities.sort((a, b) => b.timestamp - a.timestamp);
};

export default generateMockData;