//reolver are functions that provide the data for each field in the schema.

import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { chats, messages } from '../db';

const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,
  Chat: {
    //retrieve the messages for the chat
    messages: (parent: any) => {
        return messages.filter((m) => parent.messages.includes(m.id));
    },
//first argument of the resolver is the raw chat object from the database received by the parent of the resolvent field (chats resolver) 
    lastMessage: (parent: any) => {
        //parent is the chat object
        //messages is the array of message objects
        //we are finding the message object that matches the id of the lastMessage field in the parent chat object

    //so here we are getting the last message from the messages array
    const lastMessage = parent.messages[parent.messages.length - 1];
    return messages.find((m) => m.id === lastMessage);
    },
  },

  //the returned result should be mapped value which we would like to return to the client
  Query: {
    chats(){
        return chats;
    },
    chat: (parent: any, args: { chatId: string }) => {
        return chats.find((c: any) => c.id === args.chatId);
    },
  },
};

export default resolvers;