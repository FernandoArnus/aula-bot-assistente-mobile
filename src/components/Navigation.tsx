
import React from 'react';
import { MessageSquare, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeTab: 'chat' | 'lessons';
  onTabChange: (tab: 'chat' | 'lessons') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        <button
          onClick={() => onTabChange('chat')}
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
            activeTab === 'chat'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <MessageSquare size={24} />
          <span className="text-sm mt-1">Chat</span>
        </button>
        <button
          onClick={() => onTabChange('lessons')}
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
            activeTab === 'lessons'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <BookOpen size={24} />
          <span className="text-sm mt-1">Aulas</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
