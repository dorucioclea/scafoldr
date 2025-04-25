import { Message } from '../types/messageTypes';
import ChatBubble from './ChatBubble';

interface ChatHistoryProps {
  chatHistory: Message[];
}

const ChatHistory = ({ chatHistory }: ChatHistoryProps) => {
  return (
    <div className="">
      {chatHistory.length === 0 && (
        <div className="prose mt-[40%]">
          <h1>👋 Welcome to Scafoldr!</h1>
          <p>💬 Chat: Share your business goal (e.g. “Manage flower orders and deliveries”).</p>
          <p>🛠️ Edit: Hop into DBML view & fine-tune tables and columns. </p>
          <p>👀 Preview: Watch your ER-diagram spring to life.</p>
          <p>
            ⚡ Generate: Click “Generate Code” to spin up your backend. Ready to build? Let’s go!
          </p>
        </div>
      )}
      {chatHistory.map((message, index) => (
        <ChatBubble chatText={message.text} key={index} from={message.from} type={message.type} />
      ))}
    </div>
  );
};

export default ChatHistory;
