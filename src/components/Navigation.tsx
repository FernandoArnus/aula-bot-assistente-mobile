
import React from 'react';
import { MessageSquare, BookOpen, Library, User } from 'lucide-react';

interface NavigationProps {
  activeTab: 'chat' | 'lessons' | 'repository' | 'profile';
  onTabChange: (tab: 'chat' | 'lessons' | 'repository' | 'profile') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        <button
          onClick={() => onTabChange('chat')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
            activeTab === 'chat'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">Chat</span>
        </button>
        <button
          onClick={() => onTabChange('lessons')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
            activeTab === 'lessons'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <BookOpen size={24} />
          <span className="text-xs mt-1">Aulas</span>
        </button>
        <button
          onClick={() => onTabChange('repository')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
            activeTab === 'repository'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Library size={24} />
          <span className="text-xs mt-1">Repositório</span>
        </button>
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
            activeTab === 'profile'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Professor</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
