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


/*
the fake client accepts an array of mocks where each mock object will have a request key that contain details about the request and result key which will contain the mocked result. 

/*
A "fake" Apollo Client, often called a mock Apollo Client, is a special instance of Apollo Client configured to intercept and respond to GraphQL queries with predefined mock data instead of making real network requests. This is especially useful in testing environments, where you want to simulate server responses and test how your React components interact with GraphQL data, without depending on a real backend.

The fake client uses a mock link (such as MockLink from apollo-link-mock) that matches incoming GraphQL operations against an array of mock definitions. Each mock specifies the expected request (query and variables) and the result (data or error) to return. This allows you to control the data flow and test various scenarios, such as loading states, errors, and successful data fetching, in a predictable and isolated way.
*/


