import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { MockLink } from 'apollo-link-mock';

/**
 * Creates a mock Apollo Client for testing purposes
 * @param mocks - Array of mock responses for GraphQL operations
 * @returns ApolloClient instance configured with mock data
 */
export const createMockClient = (mocks: any) => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new MockLink(mocks, true),
    });
};