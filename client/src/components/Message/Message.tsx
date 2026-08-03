import "./Message.css";

interface Props {
  text: string;
  sender: "user" | "ai";
}

const Message = ({ text, sender }: Props) => {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
};

export default Message;