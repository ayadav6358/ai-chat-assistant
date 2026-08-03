import Header from "../../components/Header/Header";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import ChatInput from "../../components/ChatInput/ChatInput";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <ChatWindow />

      <ChatInput />
    </div>
  );
};

export default Home;