import React from 'react';
//since we are moving away from the local data-mock, we need to import the moment library
import moment from 'moment';
import { List, ListItem } from '@mui/material';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react'; 
//used for fetching data from the server


const Container = styled.div`
  height: calc(100% - 56px);
  overflow-y: overlay;
`;

const StyledList = styled(List)`
  padding: 0 !important;
`;

const StyledListItem = styled(ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

const ChatName = styled.div`
  margin-top: 5px;
`;

const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;

// The fetch logic in this component is responsible for retrieving the list of chats from the backend server when the component mounts.
// Here's how it works:
//
// 1. State Initialization:
//    - The component uses the `useState` hook to create a state variable called `chats` (an array) and a setter function `setChats`.
//      This state will hold the chat data fetched from the server.
//
// 2. Fetching Data with useEffect:
//    - The `useEffect` hook is used to perform the data fetching as a side effect when the component is first rendered (on mount).
//    - Inside `useEffect`, an asynchronous function `fetchChats` is defined and immediately invoked.
//
// 3. Making the Fetch Request:
//    - `fetchChats` constructs the server URL using the `REACT_APP_SERVER_URL` environment variable (if defined), appending `/chats` to it.
//      If the environment variable is not set, it defaults to `/chats` (which would work if the frontend and backend are served from the same origin).
//    - The `fetch` API is used to send a GET request to the server's `/chats` endpoint.
//    - The response is parsed as JSON.
//
// 4. Updating State:
//    - Once the data is received, `setChats(data)` updates the `chats` state with the fetched chat list.
//    - If an error occurs during fetching, it is caught and logged to the console.
//
// 5. Why useEffect and useState?
//    - `useEffect` ensures the fetch only happens once when the component mounts, preventing repeated or unnecessary requests.
//    - `useState` allows the component to re-render and display the chat list once the data is available.
//
// This approach ensures that the chat data is always loaded from the backend server when the component is first displayed, and the UI updates automatically when the data arrives.
const ChatsList = () => {
  const [chats, setChats] = useState<any[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_SERVER_URL
            ? `${process.env.REACT_APP_SERVER_URL}/chats`
            : '/chats'
        );
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };
    fetchChats();
  }, []);

  return (
    <Container>
      <StyledList>
        {chats.map((chat) => (
          <StyledListItem key={chat.id}>
            <ChatPicture src={chat.picture} alt="Profile" />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              {chat.lastMessage && (
                <React.Fragment>
                  <MessageContent>{chat.lastMessage.content}</MessageContent>
                  <MessageDate>
                    {moment(chat.lastMessage.createdAt).format('HH:mm')}
                  </MessageDate>
                </React.Fragment>
              )}
            </ChatInfo>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default ChatsList;
