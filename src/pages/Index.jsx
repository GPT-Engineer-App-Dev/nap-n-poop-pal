import React from 'react';
import BabyTracker from '../components/BabyTracker';
import { ThemeToggle } from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user, signIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-accent dark:from-gray-800 dark:to-gray-900 py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-0">Baby Activity Tracker</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {!user && <Button onClick={signIn}>Sign In</Button>}
          </div>
        </div>
        {user ? (
          <BabyTracker />
        ) : (
          <div className="text-center text-white">
            <p className="text-xl mb-4">Please sign in to use the Baby Activity Tracker</p>
            <Button onClick={signIn} size="lg">Sign In with Google</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;