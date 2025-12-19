import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ChatInterface = () => {
  const { theme, toggleTheme } = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Apply theme classes to chat container
  const chatThemeClass = theme === 'dark' ? 'chat-dark-theme' : 'chat-light-theme';

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: `I received your message: "${inputValue}". This is a simulated response from the AI assistant.`,
          sender: 'ai',
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-container ${chatThemeClass}`}>
      <div className="chat-header">
        <h3>AI Assistant</h3>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <p>Hello! I'm your AI assistant for robotics learning. How can I help you today?</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender}-message`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-timestamp">
                {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="chat-input-area">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about robotics..."
          className="chat-input"
          rows="3"
        />
        <button
          onClick={handleSendMessage}
          className="send-button"
          disabled={!inputValue.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;