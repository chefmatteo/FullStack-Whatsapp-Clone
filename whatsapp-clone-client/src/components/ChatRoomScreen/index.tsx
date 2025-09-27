import React from 'react';
import { useCallback } from 'react';
import gql from 'graphql-tag';
import { useApolloClient, useQuery } from 'react-apollo';
import styled from 'styled-components';
import ChatNavbar from './ChatNavbar';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import { getGraphQLUrl } from '../../config/urls';


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

//using graphql-tag to parse the query string into an AST
const getChatQuery = gql` 
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
  _typename: string;
}

export interface ChatQueryResult {
  id: string;
  name: string;
  picture: string;
  messages: Array<ChatQueryMessage>;
}


const ChatRoomScreen: React.FC<ChatRoomScreenParams> = ({ chatId }) => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery<any>(getChatQuery, {
    variables: { chatId },
  });
  const chat = data?.chat;

  const onSendMessage = useCallback(
    (content: string) => {
      if (!chat) return null;

      const message = {
        id: (chat.messages.length + 10).toString(),
        createdAt: new Date(),
        content,
      };

      // Update Apollo Client cache directly
      client.writeQuery({
        query: getChatQuery,
        variables: { chatId },
        data: {
          chat: {
            ...chat,
            messages: chat.messages.concat(message),
          },
        },
      });
    },
    [chat, client, chatId]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
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