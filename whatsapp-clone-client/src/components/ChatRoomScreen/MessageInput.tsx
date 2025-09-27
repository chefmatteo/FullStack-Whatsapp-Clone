import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

/**
 * MessageInput Component
 * 
 * Provides an input field for typing messages and a send button.
 * Handles message submission and provides a WhatsApp-like interface.
 */

interface MessageInputProps {
  /**
   * onSendMessage: Optional callback function that is called when the user sends a message.
   *   - Receives the message as a string argument.
   *   - Example usage: onSendMessage("Hello world")
   * disabled: Optional boolean flag to disable the input and send button.
   *   - When true, the input field and send button are not interactive.
   */
  onSendMessage?: (message: string) => void;
  disabled?: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 12px 16px;
  background-color: #f0f0f0;
  border-top: 1px solid #e0e0e0;
  gap: 12px;
  min-height: 80px;
`;

const InputField = styled.input`
  flex: 1;
  border: none;
  border-radius: 25px;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 1.4;
  outline: none;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  min-height: 48px;
  max-height: 120px;
  resize: none;

  &:focus {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &::placeholder {
    color: #999;
    font-size: 16px;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

const SendButton = styled(Button)`
  min-width: 56px !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  background-color: #25d366 !important;
  color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s ease !important;
  flex-shrink: 0 !important;

  &:hover {
    background-color: #22c55e !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
    transform: scale(1.05) !important;
  }

  &:active {
    transform: scale(0.95) !important;
  }

  &:disabled {
    background-color: #e0e0e0 !important;
    color: #999 !important;
    box-shadow: none !important;
    transform: none !important;
  }

  svg {
    font-size: 24px;
  }
`;

const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage, 
  disabled = false 
}) => {
  const [message, setMessage] = useState('');

  const handleSend = useCallback((e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage && onSendMessage) {
      onSendMessage(trimmedMessage);
      setMessage('');
    }
  }, [message, onSendMessage]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <Container>
      <form onSubmit={handleSend} style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
        <InputField
          data-testedid="message-input"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          aria-label="Message input"
        />
        <SendButton
          data-testedid="send-button"
          type="submit"
          variant="contained"
          color="primary"
          disabled={disabled || !message.trim()}
          aria-label="Send message"
        >
          <SendIcon />
        </SendButton>
      </form>
    </Container>
  );
};

export default MessageInput;