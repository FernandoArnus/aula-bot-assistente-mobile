
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatInterface from '@/components/ChatInterface';
import LessonsPanel from '@/components/LessonsPanel';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'lessons'>('chat');

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'chat' ? <ChatInterface /> : <LessonsPanel />}
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
