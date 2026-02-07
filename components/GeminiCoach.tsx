
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { fitnessAIService } from '../services/geminiService';

const GeminiCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: '¡Hola! Soy tu asistente de Sofia\'s Gym. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await fitnessAIService.getFitnessAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform bg-redCustom text-white p-4 rounded-full shadow-2xl hover:bg-black group flex items-center justify-center`}
      >
        <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-0 right-0 w-[350px] sm:w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-black p-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-redCustom rounded-xl text-white">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg font-oswald uppercase tracking-wider leading-none">AI COACH</h3>
              <span className="text-redCustom text-[10px] font-bold uppercase animate-pulse">Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-redCustom text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-redCustom" />
                <span className="text-xs text-gray-500 font-bold italic">Generando consejos...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregúntame sobre tu rutina..."
              className="w-full px-5 py-4 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-redCustom/20 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-3 bg-redCustom text-white rounded-xl hover:bg-black transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-3 font-bold uppercase tracking-tighter">
            Powered by Sofia's AI assistant
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiCoach;
