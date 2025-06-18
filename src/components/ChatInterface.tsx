
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Eu sou a Hey Gringa, seu assistente educacional para aulas de inglês. Como posso ajudá-lo a criar uma aula incrível hoje?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular resposta do bot
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Perfect! Vou ajudá-lo a criar uma aula de inglês sobre esse tópico. Que tal começarmos definindo o nível dos alunos e os objetivos de aprendizagem?',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Aqui seria implementada a funcionalidade de gravação de áudio
    if (!isRecording) {
      console.log('Iniciando gravação de áudio...');
    } else {
      console.log('Parando gravação de áudio...');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">Hey Gringa</h1>
            <p className="text-sm text-gray-500">Assistente de Inglês • Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? 'bg-primary text-white rounded-br-md'
                  : 'bg-white text-gray-900 rounded-bl-md shadow-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.isUser ? 'text-purple-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white text-gray-900 rounded-2xl rounded-bl-md shadow-sm p-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 border-gray-300 focus:border-primary focus:ring-primary"
          />
          <Button
            onClick={toggleRecording}
            size="icon"
            variant={isRecording ? "destructive" : "outline"}
            className={isRecording ? "bg-red-500 hover:bg-red-600" : "border-gray-300 hover:bg-gray-50"}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
          </Button>
          <Button
            onClick={sendMessage}
            size="icon"
            className="bg-primary hover:bg-purple-600 text-white"
            disabled={!inputText.trim()}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
