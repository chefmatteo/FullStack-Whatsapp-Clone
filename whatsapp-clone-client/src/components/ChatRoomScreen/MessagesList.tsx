import moment from 'moment';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChatQueryMessage } from './index';

/**
 * MessagesList Component
 * 
 * Displays a list of chat messages with timestamps and styling
 * that resembles WhatsApp message bubbles.
 * Scrollable list of all the messages in the active chat.
 * Automatically scrolls to the bottom when new messages are added.
 */

interface MessagesListProps {
  messages: Array<ChatQueryMessage>;
}

const Container = styled.div`
  display: block;
  flex: 2;
  overflow-y: auto;
  padding: 0 15px;
  background: transparent;
`;

const MessageItem = styled.div`
  float: right;
  background-color: #dcf8c6;
  display: inline-block;
  position: relative;
  max-width: 70%;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 10px;
  clear: both;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &::before {
    background-image: url(/assets/message-mine.png);
    content: '';
    position: absolute;
    bottom: 3px;
    width: 12px;
    height: 19px;
    right: -11px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Contents = styled.div`
  padding: 5px 7px;
  word-wrap: break-word;
  min-height: 20px;
  
  /* Add space for timestamp */
  padding-right: 50px;
`;

const Timestamp = styled.div`
  position: absolute;
  bottom: 2px;
  right: 7px;
  color: #666;
  font-size: 12px;
  font-weight: 300;
`;

const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages.length]);

  return (
    <Container ref={containerRef}>
      {messages.map((message) => (
        <MessageItem data-testid="message-item" key={message.id}>
          <Contents data-testid="message-content">{message.content}</Contents>
          <Timestamp data-testid="message-date">
            {moment(message.createdAt).format('HH:mm')}
          </Timestamp>
        </MessageItem>
      ))}
    </Container>
  );
};

export default MessagesList;