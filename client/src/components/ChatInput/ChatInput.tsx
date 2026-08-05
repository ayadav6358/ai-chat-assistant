import './ChatInput.css';
import type { FormEvent } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSend();
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Ask the assistant anything..."
        aria-label="Message input"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;