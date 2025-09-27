import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import { GRAPHQL_URL } from './config/urls';
//const httpUri = process.env.REACT_APP_SERVER_URL + '/graphql'; this is the same as the GRAPHQL_URL
//link connect the client to the server

const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    fetch: fetch
});

const cache = new InMemoryCache(); //cache the results of the queries

const client = new ApolloClient({ //create the client
    cache,
    link: httpLink,
});

export default client;