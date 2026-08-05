import './ChatWindow.css';
import Message from '../Message/Message';
import type { ChatMessage } from '../../types/chat';

interface ChatWindowProps {
  messages: ChatMessage[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <div className="chat-window">
      {messages.map((message) => (
        <Message key={message.id} sender={message.sender} text={message.text} />
      ))}
    </div>
  );
};

export default ChatWindow;