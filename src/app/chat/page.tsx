import ChatContent from "~/components/chat/ChatContent";
import ChatSidebar from "~/components/chat/ChatSidebar";
import Navbar from "~/components/Navbar";
import ProfileSidebar from "~/components/profile/ProfileSidebar";
import Sidebar from "~/components/Sidebar";

const ChatPage = () => {
  return (
    <div className="bg-zinc-800 text-white flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Navbar className="bg-zinc-800 p-3" />
        <div className="flex flex-grow overflow-hidden">
          <ChatSidebar />
          <ChatContent />
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
