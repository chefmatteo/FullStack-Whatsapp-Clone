import React from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  useParams,
  useNavigate,  
} from 'react-router-dom';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';
import AnimatedSwitch from './components/AnimatedSwitch';

const ChatRoomWrapper: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  return <ChatRoomScreen chatId={chatId!} />;
};

const ChatsListWrapper: React.FC = () => {
  const navigate = useNavigate();
  //useNavigate is a hook that returns a function that can be used to navigate to a different route
  // where will it navigate to:
  // The navigate function will redirect the user to the path provided as an argument to history.push.
  // For example, if history.push('chats/1') is called, the user will be naviga ted to '/chats/1'.
  // This is used to programmatically move to a specific chat room when a chat is clicked.
  const history = {
    push: (path: string) => navigate(`/${path}`),
  };
  return <ChatsListScreen history={history as any} />;
};

const App: React.FC = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route path="/chats" element={<ChatsListWrapper />} />

      <Route path="/chats/:chatId" element={<ChatRoomWrapper />} />

      <Route path="/" element={<Navigate to="/chats" replace />} />
      
    </AnimatedSwitch>
  </BrowserRouter>
);

export default App;
//Note how we used the match.params.chatId variable to get the selected chat ID. The match prop is defined and provided to us by the <Route /> component, since it interfaces directly with the ChatRoomScreen. 

