import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const { user, logOut } = useAuth();
  const [babyName, setBabyName] = useState('');
  const [notifications, setNotifications] = useState(false);

  const handleSave = () => {
    // TODO: Implement saving settings to user profile
    console.log('Saving settings:', { babyName, notifications });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="babyName">Baby's Name</Label>
          <Input
            id="babyName"
            value={babyName}
            onChange={(e) => setBabyName(e.target.value)}
            placeholder="Enter baby's name"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
        <Button onClick={handleSave} className="w-full">Save Settings</Button>
        <Button onClick={logOut} variant="outline" className="w-full">Log Out</Button>
      </CardContent>
    </Card>
  );
};

export default Settings;