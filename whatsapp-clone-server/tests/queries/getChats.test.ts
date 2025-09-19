import { ApolloServer } from 'apollo-server-express';
import { gql } from 'apollo-server-express';
import schema from '../../schema';

describe('Query.chats', () => {
  let server: ApolloServer;

  beforeAll(() => {
    server = new ApolloServer({
      schema,
      introspection: true
    });
  });

  it('fetches all chats', async () => {
    const GET_CHATS = gql`
      query GetChats {
        chats {
          id
          name
          picture
          lastMessage {
            id
            content
            createdAt
          }
        }
      }
    `;

    const res = await server.executeOperation({
      query: GET_CHATS
    });
    
    expect(res.errors).toBeUndefined();
    expect(res.data).toBeDefined();
    expect(res.data?.chats).toBeDefined();
    expect(Array.isArray(res.data?.chats)).toBe(true);
    expect(res.data?.chats.length).toBeGreaterThan(0);
    
    // Check the structure of the first chat
    const firstChat = res.data?.chats[0];
    expect(firstChat).toHaveProperty('id');
    expect(firstChat).toHaveProperty('name');
    expect(firstChat).toHaveProperty('picture');
    expect(firstChat).toHaveProperty('lastMessage');
    expect(firstChat.lastMessage).toHaveProperty('id');
    expect(firstChat.lastMessage).toHaveProperty('content');
    expect(firstChat.lastMessage).toHaveProperty('createdAt');
  });
});
