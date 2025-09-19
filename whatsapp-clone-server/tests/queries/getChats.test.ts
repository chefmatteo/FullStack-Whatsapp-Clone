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

  it('should fetch all chats', async () => {
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
    
    // Snapshot test to ensure data structure matches expected projection from db.ts
    expect(res.data).toMatchSnapshot();
  });
});
