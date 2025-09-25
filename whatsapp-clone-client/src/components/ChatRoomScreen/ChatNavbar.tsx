import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChatQueryResult } from './index';

/**
 * ChatNavbar Component
 * 
 * Navigation bar for chat room screen that displays chat information
 * and provides navigation back to the chats list.
 */

interface ChatNavbarProps {
  chat: ChatQueryResult;
}

const Container = styled(Toolbar)`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`;

const BackButton = styled(Button)`
  svg {
    color: var(--primary-text);
  }
`;

const Picture = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 3px;
  margin-left: -22px;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`;

const Name = styled.div`
  line-height: 56px;
`;

const ChatNavbar: React.FC<ChatNavbarProps> = ({ chat }) => {
  const navigate = useNavigate();
  
  const navBack = useCallback(() => {
    navigate('/chats', { replace: true });
  }, [navigate]);

  return (
    <Container>
      <BackButton onClick={navBack} aria-label="Go back to chats">
        <ArrowBackIcon />
      </BackButton>
      <Picture src={chat.picture} alt={`${chat.name} profile picture`} />
      <Name>{chat.name}</Name>
    </Container>
  );
};

export default ChatNavbar;