import "./ChatWindow.css";
import Message from "../Message/Message";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <Message
        sender="ai"
        text="👋 Welcome! Ask me anything."
      />

      <Message
        sender="user"
        text="Explain React."
      />

      <Message
        sender="ai"
        text="React is a JavaScript library used for building user interfaces."
      />
    </div>
  );
};

export default ChatWindow;