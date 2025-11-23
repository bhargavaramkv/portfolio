import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToJarvis } from '../services/geminiService';
import { ChatMessage } from '../types';
import { MessageSquare, Send, Minus, X } from 'lucide-react';

export const JarvisChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      text: "Greetings. I am J.A.R.V.I.S. I can provide detailed analysis on the Developer's capabilities. How may I assist you?",
      sender: 'jarvis',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToJarvis(input);

    const jarvisMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'jarvis',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, jarvisMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-marvel-blue text-white rounded-full shadow-[0px_0px_20px_#0064FF] flex items-center justify-center border-4 border-white z-50 hover:scale-110 transition-transform animate-bounce"
        aria-label="Open J.A.R.V.I.S."
      >
        <MessageSquare size={32} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm h-[500px] bg-jarvis-bg backdrop-blur-md rounded-lg border-2 border-jarvis-blue shadow-[0px_0px_30px_rgba(0,176,255,0.4)] z-50 flex flex-col font-mono text-sm overflow-hidden">
      
      {/* HUD Header */}
      <div className="bg-jarvis-blue/20 p-3 flex justify-between items-center border-b border-jarvis-blue/50">
        <div className="flex items-center space-x-2">
           <div className="w-3 h-3 bg-jarvis-blue rounded-full animate-pulse"></div>
           <span className="text-jarvis-blue font-bold tracking-widest uppercase">J.A.R.V.I.S. SYSTEM</span>
        </div>
        <div className="flex space-x-2 text-jarvis-blue">
          <button onClick={() => setIsOpen(false)} className="hover:text-white"><Minus size={18} /></button>
          <button onClick={() => setIsOpen(false)} className="hover:text-white"><X size={18} /></button>
        </div>
      </div>

      {/* Grid Overlay for HUD effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,176,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,176,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10 scrollbar-thin scrollbar-thumb-jarvis-blue/50 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 border ${
                msg.sender === 'user'
                  ? 'bg-jarvis-blue/20 border-jarvis-blue text-white rounded-tl-xl rounded-bl-xl rounded-br-xl'
                  : 'bg-transparent border-jarvis-blue/50 text-jarvis-blue rounded-tr-xl rounded-bl-xl rounded-br-xl'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-[10px] opacity-50 block text-right mt-1">
                {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-transparent border border-jarvis-blue/30 text-jarvis-blue p-3 rounded-xl flex items-center space-x-2">
               <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce"></span>
               <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
               <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-black/40 border-t border-jarvis-blue/30 relative z-10">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="ACCESS TERMINAL..."
            className="flex-1 bg-transparent border-b border-jarvis-blue/50 text-white p-2 focus:outline-none focus:border-jarvis-blue placeholder-jarvis-blue/30 font-mono"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="text-jarvis-blue hover:text-white disabled:opacity-50 p-2"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
