/**
 * Server-side URL Configuration
 * 
 * Centralized configuration for server-side URL constants and utilities.
 * Uses environment variables with sensible fallbacks.
 */

// Server Configuration
export const PORT = process.env.PORT || 4000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || '/graphql';

// Database Configuration
export const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:./db.sqlite';

// CORS Configuration
export const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

// Development Configuration
export const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';

// Computed URLs
export const SERVER_URL = `http://localhost:${PORT}`;
export const GRAPHQL_URL = `${SERVER_URL}${GRAPHQL_ENDPOINT}`;

// Environment Detection
export const isDevelopment = NODE_ENV === 'development';
export const isProduction = NODE_ENV === 'production';

// Server Configuration Object
export const serverConfig = {
  port: PORT,
  nodeEnv: NODE_ENV,
  graphql: {
    endpoint: GRAPHQL_ENDPOINT,
    url: GRAPHQL_URL,
  },
  database: {
    url: DATABASE_URL,
  },
  cors: {
    origin: CORS_ORIGIN,
  }, 
  logging: {
    level: LOG_LEVEL,
  },
  environment: {
    isDevelopment,
    isProduction,
  },
};

export default serverConfig;
