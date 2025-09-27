/**
 * URL Configuration
 * 
 * Centralized configuration for all URL-related constants and utilities.
 * Uses environment variables with sensible fallbacks.
 */

// Server Configuration
export const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT || '/graphql';
export const ASSETS_PATH = process.env.REACT_APP_ASSETS_PATH || '/assets';

// Computed URLs
export const GRAPHQL_URL = SERVER_URL + GRAPHQL_ENDPOINT;
export const ASSETS_URL = ASSETS_PATH;

// Test URLs (for testing environments)
export const TEST_IMAGE_URL = process.env.REACT_APP_TEST_IMAGE_URL || 'https://localhost:4000/picture.jpg';
export const TEST_EXTERNAL_IMAGE_URL = process.env.REACT_APP_TEST_EXTERNAL_IMAGE_URL || 'https://example.com/john.jpg';

// Asset helpers
export const getAssetUrl = (filename: string): string => {
  return `${ASSETS_URL}/${filename}`;
};

// API helpers
export const getApiUrl = (endpoint: string = ''): string => {
  return `${SERVER_URL}${endpoint}`;
};

export const getGraphQLUrl = (): string => {
  return GRAPHQL_URL;
};

// Development configuration
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

// Default configuration object
export const urlConfig = {
  server: SERVER_URL,
  graphql: GRAPHQL_URL,
  assets: ASSETS_URL,
  test: {
    image: TEST_IMAGE_URL,
    externalImage: TEST_EXTERNAL_IMAGE_URL,
  },
  helpers: {
    getAssetUrl,
    getApiUrl,
    getGraphQLUrl,
  },
  environment: {
    isDevelopment,
    isProduction,
  },
};

export default urlConfig;
