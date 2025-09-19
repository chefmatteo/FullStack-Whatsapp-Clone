import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import ChatsList from './ChatsList';

// Mock fetch for testing
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('ChatsList', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders fetched chats data', async () => {
    const mockData = {
      data: {
        chats: [
          {
            id: 1,
            name: 'Foo Bar',
            picture: 'https://localhost:4000/picture.jpg',
            lastMessage: {
              id: 1,
              content: 'Hello',
              createdAt: new Date('1 Jan 2019 00:00:00 GMT'),
            },
          },
        ],
      },
    };

    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockData),
    });

    const { getByTestId } = render(<ChatsList />);

    // Wait for the component to load and display the mocked data
    await waitFor(() => getByTestId('name'));

    expect(getByTestId('name')).toHaveTextContent('Foo Bar');
    expect(getByTestId('picture')).toHaveAttribute(
      'src',
      'https://localhost:4000/picture.jpg'
    );
    expect(getByTestId('content')).toHaveTextContent('Hello');
    expect(getByTestId('date')).toHaveTextContent(/\d{2}:\d{2}/);
  });
});