import {importSchema} from 'graphql-import';
import {makeExecutableSchema} from '@graphql-tools/schema';

//graphql-tools is a library with a set of utilities that will help us create a schema that will be compatible with Apollo's API:
import resolvers from './resolvers';

const typeDefs = importSchema('./schema/typeDefs.graphql');

export default makeExecutableSchema({resolvers, typeDefs});