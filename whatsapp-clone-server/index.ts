import express from 'express';

const app = express(); // Create an Express application
const PORT = process.env.PORT || 4000; // Set the port for the server

// Middleware
//app.use(express.json()); // Parse JSON bodies

// Basic route
//req: request
//res: response

app.get('/_ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
// Health check route
// app.get('/health', (req, res) => {
//   res.json({ status: 'OK', service: 'WhatsApp Clone Server' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📊 Health check available at http://localhost:${PORT}/health`);
// });
