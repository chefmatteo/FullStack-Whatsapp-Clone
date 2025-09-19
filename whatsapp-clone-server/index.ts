import express from 'express';
import { ApolloServer } from 'apollo-server-express';
//this is the apollo middleware package for express
// import { chats, messages } from './db'; //render from server 
// side db.ts
//since 
import cors from 'cors';
import schema from './schema'; //render from server side schema.ts
const app = express(); // Create an Express application
const PORT = process.env.PORT || 4000; // Set the port for the server
app.use(express.json());//meaning it will parse the json body of the request
// Middleware namely cors: 

//app.use(express.json()); // Parse JSON bodies
app.use(cors());
// Basic route
//req: request
//res: response

app.get('/_ping', (req, res) => {
  res.send('pong');
});



// Removed GET /chats route - now handled by GraphQL
// app.get('/chats', (req, res) => {
//   //res.json(chats);
//   // Transform chats to include full message objects instead of 
//   just IDs
//   const chatsWithMessages = chats.map(chat => {
//     const lastMessage = messages.find(msg => msg.id === chat.
//     lastMessage);
//     return {
//       ...chat,
//       lastMessage: lastMessage || null
//     };
//   });
//   res.json(chatsWithMessages);
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });
// // Health check route
// // app.get('/health', (req, res) => {
// //   res.json({ status: 'OK', service: 'WhatsApp Clone 
// Server' });
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}
// `);
// //   console.log(`📊 Health check available at http://localhost:$
// {PORT}/health`);
// // });
// //the server required a schema and resolvers
// const server = new ApolloServer({
//   typeDefs: schema.typeDefs,
//   resolvers: schema.resolvers,

// server.applyMiddleware({ 
//   app, 
//   path: '/graphql' });



//the server required a schema and resolvers
const server = new ApolloServer({
  schema: schema,
  introspection: true
});

// Start the server with async function
async function startServer() {
  await server.start();
  server.applyMiddleware({ 
    app: app as any, 
    path: '/graphql' 
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    console.log(`GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(error => {
  console.error('Error starting server:', error);
});