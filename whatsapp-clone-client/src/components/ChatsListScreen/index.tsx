import React from 'react';
import ChatsNavBar from './ChatsNavBar';
import ChatsList from './ChatsList';
import styled from 'styled-components';
import { History } from 'history';

const Container = styled.div`
  height: 100vh;
`;

interface ChatsListScreenProps {
  history: History;
}

const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ history }) => (
  <Container>
    <ChatsNavBar />
    <ChatsList history={history} />
  </Container>
);

export default ChatsListScreen;
