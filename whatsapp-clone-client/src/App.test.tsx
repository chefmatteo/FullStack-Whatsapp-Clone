import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WhatsApp chat interface', () => {
  render(<App />);
  const chatNavElement = screen.getByText(/whatchow chat/i);
  expect(chatNavElement).toBeInTheDocument();
});

test('renders chat list with contacts', () => {
  render(<App />);
  const ethanContact = screen.getByText(/ethan gonzalez/i);
  const bryanContact = screen.getByText(/bryan wallace/i);
  expect(ethanContact).toBeInTheDocument();
  expect(bryanContact).toBeInTheDocument();
});
