
import React, { useState } from 'react';
import { Search, Star, Download, BookOpen, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RepositoryLesson {
  id: string;
  title: string;
  description: string;
  level: string;
  rating: number;
  downloads: number;
  duration: string;
  category: string;
  tags: string[];
}

const RepositoryPanel: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<RepositoryLesson | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'downloads' | 'title'>('rating');

  const repositoryLessons: RepositoryLesson[] = [
    {
      id: '1',
      title: 'Present Perfect Tense',
      description: 'Complete lesson on present perfect with exercises and examples',
      level: 'Intermediate',
      rating: 4.8,
      downloads: 1250,
      duration: '50 min',
      category: 'Grammar',
      tags: ['present perfect', 'grammar', 'tenses']
    },
    {
      id: '2',
      title: 'Business English Vocabulary',
      description: 'Essential vocabulary for professional communication',
      level: 'Advanced',
      rating: 4.9,
      downloads: 890,
      duration: '45 min',
      category: 'Vocabulary',
      tags: ['business', 'vocabulary', 'professional']
    },
    {
      id: '3',
      title: 'Conditional Sentences',
      description: 'All types of conditional sentences with practical examples',
      level: 'Intermediate',
      rating: 4.7,
      downloads: 2100,
      duration: '60 min',
      category: 'Grammar',
      tags: ['conditionals', 'grammar', 'sentences']
    },
    {
      id: '4',
      title: 'Travel English Phrases',
      description: 'Essential phrases and vocabulary for travelers',
      level: 'Beginner',
      rating: 4.6,
      downloads: 1680,
      duration: '35 min',
      category: 'Conversation',
      tags: ['travel', 'phrases', 'conversation']
    },
    {
      id: '5',
      title: 'Phrasal Verbs Mastery',
      description: 'Common phrasal verbs with meanings and usage',
      level: 'Intermediate',
      rating: 4.8,
      downloads: 1420,
      duration: '55 min',
      category: 'Vocabulary',
      tags: ['phrasal verbs', 'vocabulary', 'expressions']
    }
  ];

  const filteredLessons = repositoryLessons
    .filter(lesson => 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

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
              <h1 className="font-semibold text-gray-900">{selectedLesson.title}</h1>
              <p className="text-sm text-gray-500">{selectedLesson.level} • {selectedLesson.category}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Lesson Info */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-current" size={16} />
                  <span className="text-sm font-medium">{selectedLesson.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="text-gray-500" size={16} />
                  <span className="text-sm text-gray-600">{selectedLesson.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="text-gray-500" size={16} />
                  <span className="text-sm text-gray-600">{selectedLesson.duration}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{selectedLesson.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedLesson.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Lesson Content */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Conteúdo da Aula
              </h3>
              <p className="text-gray-500">
                O conteúdo detalhado desta aula de inglês será carregado aqui.
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
        <h1 className="text-xl font-semibold text-gray-900">Repositório de Aulas</h1>
        <p className="text-sm text-gray-500">Explore nossa biblioteca de aulas de inglês</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-200 p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Buscar aulas por título, conteúdo ou tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Ordenar por:</span>
          <Select value={sortBy} onValueChange={(value: 'rating' | 'downloads' | 'title') => setSortBy(value)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Estrelas</SelectItem>
              <SelectItem value="downloads">Downloads</SelectItem>
              <SelectItem value="title">Título</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="p-4 space-y-3">
        {filteredLessons.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhuma aula encontrada para "{searchTerm}"</p>
          </div>
        ) : (
          filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer animate-fade-in"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{lesson.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {lesson.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span>{lesson.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      <span>{lesson.downloads}</span>
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
          ))
        )}
      </div>
    </div>
  );
};

export default RepositoryPanel;
