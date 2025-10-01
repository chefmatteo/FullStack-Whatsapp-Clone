import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ReactDom from 'react-dom';
import { createMockClient } from './test-helpers';



it ('renders without crashing', () => {
  const mockClient = createMockClient([]);
  ReactDom.render(
    <ApolloProvider client={mockClient}>
      <App />
    </ApolloProvider>
  );
});
  

// Mock fetch for tests
const mockChatsData = {
  data: {
    chats: [
      {
        id: "1",
        name: "Ethan Gonzalez",
        picture: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        lastMessage: {
          id: "1",
          content: "You on your way?",
          createdAt: "2018-12-30T23:20:00.000Z"
        }
      },
      {
        id: "2",
        name: "Bryan Wallace",
        picture: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
        lastMessage: {
          id: "2",
          content: "Hey, it's me",
          createdAt: "2018-12-30T06:40:00.000Z"
        }
      }
    ]
  }
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockChatsData),
    })
  ) as jest.Mock;
});

test('renders WhatsApp chat interface', () => {
  render(<App />);
  const chatNavElement = screen.getByText(/whatsapp clone/i);
  expect(chatNavElement).toBeInTheDocument();
});

test('renders chat list with contacts', async () => {
  render(<App />);
  // Wait for the async data to load
  const ethanContact = await screen.findByText(/ethan gonzalez/i, {}, { timeout: 3000 });
  const bryanContact = await screen.findByText(/bryan wallace/i, {}, { timeout: 3000 });
  expect(ethanContact).toBeInTheDocument();
  expect(bryanContact).toBeInTheDocument();
});
