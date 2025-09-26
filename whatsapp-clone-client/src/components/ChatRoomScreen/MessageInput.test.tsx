import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput', () => {
  const mockOnSendMessage = jest.fn();

  beforeEach(() => {
    mockOnSendMessage.mockClear();
  });

  it('renders message input field and send button', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);

    expect(screen.getByLabelText('Message input')).toBeInTheDocument();
    expect(screen.getByLabelText('Send message')).toBeInTheDocument();
  });

  it('triggers callback on send button click with message content', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);
    
    const messageInput = screen.getByLabelText('Message input');
    const sendButton = screen.getByLabelText('Send message');

    fireEvent.change(messageInput, { target: { value: 'Hello world' } });
    fireEvent.click(sendButton);

    expect(mockOnSendMessage).toHaveBeenCalledWith('Hello world');
    expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
  });

  it('triggers callback on Enter key press', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);
    
    const messageInput = screen.getByLabelText('Message input');

    fireEvent.change(messageInput, { target: { value: 'Hello from keyboard' } });
    fireEvent.keyPress(messageInput, { key: 'Enter', charCode: 13 });

    expect(mockOnSendMessage).toHaveBeenCalledWith('Hello from keyboard');
    expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
  });

  it('clears input field after sending message', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);
    
    const messageInput = screen.getByLabelText('Message input') as HTMLInputElement;
    const sendButton = screen.getByLabelText('Send message');

    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    expect(messageInput.value).toBe('Test message');

    fireEvent.click(sendButton);
    expect(messageInput.value).toBe('');
  });

  it('does not send empty or whitespace-only messages', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);
    
    const messageInput = screen.getByLabelText('Message input');
    const sendButton = screen.getByLabelText('Send message');

    // Test empty message
    fireEvent.click(sendButton);
    expect(mockOnSendMessage).not.toHaveBeenCalled();

    // Test whitespace-only message
    fireEvent.change(messageInput, { target: { value: '   ' } });
    fireEvent.click(sendButton);
    expect(mockOnSendMessage).not.toHaveBeenCalled();
  });

  it('disables input and button when disabled prop is true', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} disabled={true} />);
    
    const messageInput = screen.getByLabelText('Message input');
    const sendButton = screen.getByLabelText('Send message');

    expect(messageInput).toBeDisabled();
    expect(sendButton).toBeDisabled();
  });

  it('does not trigger callback when disabled via button click', () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} disabled={true} />);
    
    const sendButton = screen.getByLabelText('Send message');

    // The button should be disabled, so clicking it should not trigger the callback
    fireEvent.click(sendButton);

    expect(mockOnSendMessage).not.toHaveBeenCalled();
  });
});