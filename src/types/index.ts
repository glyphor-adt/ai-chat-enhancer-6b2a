import React from 'react';
import { cn } from "@/lib/utils";

interface ChatMessage {
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
  enhancements?: string[]; // Example: highlights, suggestions
}

interface ChatMessageProps {
  message: ChatMessage;
  className?: string;
}

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ message, className }) => {
  const { sender, content, timestamp, enhancements } = message;

  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-4 rounded-md',
        sender === 'user'
          ? 'bg-primary/10 dark:bg-primary/20 items-end'
          : 'bg-secondary/10 dark:bg-secondary/20 items-start',
        className
      )}
    >
      <div className="text-sm text-muted-foreground">
        {sender === 'user' ? 'You' : 'AI'} - {timestamp.toLocaleTimeString()}
      </div>
      <div className="text-base whitespace-pre-wrap">{content}</div>
      {enhancements && enhancements.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Enhancements: {enhancements.join(', ')}
        </div>
      )}
    </div>
  );
};

export default ChatMessageComponent;