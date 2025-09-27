import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import { GRAPHQL_URL } from './config/urls';

const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    fetch: fetch
});

const cache = new InMemoryCache();
export const client = new ApolloClient({cache, link: httpLink});


