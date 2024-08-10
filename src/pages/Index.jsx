import React from 'react';
import BabyTracker from '../components/BabyTracker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Baby Activity Tracker</h1>
        <BabyTracker />
      </div>
    </div>
  );
};

export default Index;