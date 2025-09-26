import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatNavbar from './ChatNavbar';
import { ChatQueryResult } from './index';

// Mock useNavigate hook completely
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('ChatNavbar', () => {
  const mockChat: ChatQueryResult = {
    id: '1',
    name: 'Foo Bar',
    picture: 'https://localhost:4000/picture.jpg',
    messages: [
      {
        id: '1',
        content: 'foo',
        createdAt: new Date('1 Jan 2019 GMT'),
      },
      {
        id: '2',
        content: 'bar',
        createdAt: new Date('1 Jan 2019 GMT'),
      },
    ],
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders chat data correctly', () => {
    render(<ChatNavbar chat={mockChat} />);

    expect(screen.getByText('Foo Bar')).toBeInTheDocument();
    expect(screen.getByAltText('Foo Bar profile picture')).toHaveAttribute(
      'src',
      'https://localhost:4000/picture.jpg'
    );
  });

  it('renders back button with correct aria label', () => {
    render(<ChatNavbar chat={mockChat} />);

    const backButton = screen.getByLabelText('Go back to chats');
    expect(backButton).toBeInTheDocument();
  });

  it('navigates back to chats when back button is clicked', () => {
    render(<ChatNavbar chat={mockChat} />);

    const backButton = screen.getByLabelText('Go back to chats');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/chats', { replace: true });
  });

  it('displays different chat names correctly', () => {
    const customChat = { ...mockChat, name: 'Custom Chat Name' };
    render(<ChatNavbar chat={customChat} />);

    expect(screen.getByText('Custom Chat Name')).toBeInTheDocument();
  });

  it('displays chat picture with correct alt text based on name', () => {
    const customChat = { 
      ...mockChat, 
      name: 'John Doe',
      picture: 'https://example.com/john.jpg'
    };
    render(<ChatNavbar chat={customChat} />);

    const profileImage = screen.getByAltText('John Doe profile picture');
    expect(profileImage).toHaveAttribute('src', 'https://example.com/john.jpg');
  });
});