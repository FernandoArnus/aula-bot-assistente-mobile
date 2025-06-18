
import React, { useState } from 'react';
import { User, Lock, BarChart3, Download, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção conectar com backend
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="h-full bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={24} />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Login do Professor
            </CardTitle>
            <p className="text-sm text-gray-500">
              Acesse seu painel de controle de aulas de inglês
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-purple-600">
                <Lock size={18} className="mr-2" />
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard do Professor</h1>
            <p className="text-sm text-gray-500">Gerencie suas aulas de inglês</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-gray-600"
          >
            Sair
          </Button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 space-y-4">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-xs text-gray-500">Aulas Geradas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Download className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-xs text-gray-500">Downloads</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Aulas Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: 'Present Simple', date: '15/06/24', downloads: 23 },
              { title: 'Verb To Be', date: '14/06/24', downloads: 18 },
              { title: 'Daily Routines', date: '13/06/24', downloads: 31 },
            ].map((lesson, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{lesson.title}</p>
                    <p className="text-sm text-gray-500">{lesson.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Download size={14} />
                  <span>{lesson.downloads}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="mx-auto text-gray-300 mb-2" size={32} />
                <p className="text-sm text-gray-500">Gráfico de performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPanel;
