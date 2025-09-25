import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatNavbar from './ChatNavbar';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import {History} from 'history';

const Container = styled.div`
background: url(/assets/chat-background.png) no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const getChatQuery = `
  query GetChat($chatId: ID!) {
    chat(chatId: $chatId) {
      id
      name
      picture
      messages {
        id
        content
        createdAt
      }
    }
  }
`;

interface ChatRoomScreenParams {
  chatId: string;
  history: History;
  //history is for navigating back to the chats list
}

export interface ChatQueryMessage {
  id: string;
  content: string;
  createdAt: Date;
}

export interface ChatQueryResult {
  id: string;
  name: string;
  picture: string;
  messages: Array<ChatQueryMessage>;
}

type OptionalChatQueryResult = ChatQueryResult | null;

const ChatRoomScreen: React.FC<ChatRoomScreenParams> = ({ chatId }) => {
  const [chat, setChat] = useState<OptionalChatQueryResult>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        setLoading(true);
        setError(null);
        
        
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL || 'http://localhost:4000'}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: getChatQuery,
            variables: { chatId },
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        setChat(result.data.chat);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [chatId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chat) return <div>Chat not found</div>;

  return (
    <div>
      <img src={chat.picture} alt="Profile" />
      <div>{chat.name}</div>
      <ul>
        {chat.messages.map((message) => (
          <li key={message.id}>
            <div>{message.content}</div>
            <div>{new Date(message.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomScreen;
