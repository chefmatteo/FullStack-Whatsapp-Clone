import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import {
  cleanup,
  render,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react';
import { mockApolloClient } from '../../test-helpers';
import ChatsList from './ChatsList';

// Mock fetch for testing
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('ChatsList', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();

    delete (window as any).location;
    (window as any) = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '/',
      },
      writable: true,
    });
  });

  it('renders fetched chats data', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        data: {
          chats: [
            {
              id: 1,
              name: 'Foo Bar',
              picture: process.env.REACT_APP_TEST_IMAGE_URL || 'https://localhost:4000/picture.jpg',
              lastMessage: {
                id: 1,
                content: 'Hello',
                createdAt: new Date('1 Jan 2019 00:00:00 GMT'),
              },
            },
          ],
        },
      }),
    });

    {
      const mockHistory = {
        push: jest.fn(),
      };

      const { container, getByTestId } = render(
        <ChatsList history={mockHistory as any} />
      );

      await waitFor(() => screen.getByTestId('name'));

      expect(getByTestId('name')).toHaveTextContent('Foo Bar');
      expect(getByTestId('picture')).toHaveAttribute(
        'src',
        process.env.REACT_APP_TEST_IMAGE_URL || 'https://localhost:4000/picture.jpg'
      );
      expect(getByTestId('content')).toHaveTextContent('Hello');
      expect(getByTestId('date')).toHaveTextContent(/\d{2}:\d{2}/);
    }
  });

  it('should navigate to the target chat room on chat item click', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        data: {
          chats: [
            {
              id: 1,
              name: 'Foo Bar',
              picture: process.env.REACT_APP_TEST_IMAGE_URL || 'https://localhost:4000/picture.jpg',
              lastMessage: {
                id: 1,
                content: 'Hello',
                createdAt: new Date('1 Jan 2019 GMT'),
              },
            },
          ],
        },
      }),
    });

    const mockHistoryPush = jest.fn();
    const history = {
      push: mockHistoryPush,
    };

    {
      const { container, getByTestId } = render(
        <ChatsList history={history as any} />
      );

      await waitFor(() => screen.getByTestId('chat'));

      fireEvent.click(getByTestId('chat'));

      await waitFor(() =>
        expect(mockHistoryPush).toHaveBeenCalledWith('chats/1')
      );
    }
  });
});