
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatInterface from '@/components/ChatInterface';
import LessonsPanel from '@/components/LessonsPanel';
import RepositoryPanel from '@/components/RepositoryPanel';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'lessons' | 'repository'>('chat');

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'lessons' && <LessonsPanel />}
        {activeTab === 'repository' && <RepositoryPanel />}
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
