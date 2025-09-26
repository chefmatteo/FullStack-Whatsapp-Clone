import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import ChatNavbar from './ChatNavbar';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const Container = styled.div`
  background: #e5ddd5 url(/assets/chat-background.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
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

  const onSendMessage = useCallback(
    (content: string) => {
      if (!chat) return null;

      const message = {
        id: (chat.messages.length + 10).toString(),
        createdAt: new Date(),
        content,
      };

      setChat({
        // This line copies all properties from the existing 'chat' object into a new object.
        // Using the spread operator (...) ensures that we don't mutate the original 'chat' object,
        // which helps maintain immutability in React state updates.
        ...chat,
        messages: chat.messages.concat(message), //concat the message to the messages array
      });
    },
    [chat]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chat) return <div>Chat not found</div>;

  return (
    <Container>
      <ChatNavbar chat={chat} />
      {chat.messages && <MessagesList messages={chat.messages} />}
      <MessageInput onSendMessage={onSendMessage} />
    </Container>
  );
};

export default ChatRoomScreen;