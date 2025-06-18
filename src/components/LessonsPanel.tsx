
import React, { useState } from 'react';
import { Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Lesson {
  id: string;
  title: string;
  date: string;
  subject: string;
  duration: string;
}

const LessonsPanel: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Present Simple',
      date: '15/06/24',
      subject: 'Grammar',
      duration: '45 min'
    },
    {
      id: '2',
      title: 'Verb To Be',
      date: '14/06/24',
      subject: 'Basic Grammar',
      duration: '50 min'
    },
    {
      id: '3',
      title: 'Daily Routines Vocabulary',
      date: '13/06/24',
      subject: 'Vocabulary',
      duration: '40 min'
    },
    {
      id: '4',
      title: 'Past Simple Tense',
      date: '12/06/24',
      subject: 'Grammar',
      duration: '45 min'
    },
    {
      id: '5',
      title: 'Family Members',
      date: '11/06/24',
      subject: 'Vocabulary',
      duration: '40 min'
    }
  ];

  if (selectedLesson) {
    return (
      <div className="h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedLesson(null)}
              className="text-gray-600"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1">
              <h1 className="font-semibold text-gray-900">
                Aula do dia {selectedLesson.date} - {selectedLesson.title}
              </h1>
              <p className="text-sm text-gray-500">{selectedLesson.subject}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-primary" size={20} />
              <span className="text-sm text-gray-600">Duração: {selectedLesson.duration}</span>
            </div>
            
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Conteúdo da Aula de Inglês
              </h3>
              <p className="text-gray-500">
                O conteúdo desta aula será adicionado pela Hey Gringa.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold text-gray-900">Aulas de Inglês Criadas</h1>
        <p className="text-sm text-gray-500">Visualize suas aulas de inglês geradas pela Hey Gringa</p>
      </div>

      {/* Lessons Grid */}
      <div className="p-4 space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => setSelectedLesson(lesson)}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer animate-fade-in"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">
                  Aula do dia {lesson.date} - {lesson.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{lesson.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    <span>{lesson.subject}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsPanel;
