'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const react_2 = require('@testing-library/react');
const App_1 = __importDefault(require('./App'));
test('renders WhatsApp chat interface', () => {
  (0, react_2.render)(<App_1.default />);
  const chatNavElement = react_2.screen.getByText(/whatchow chat/i);
  expect(chatNavElement).toBeInTheDocument();
});
test('renders chat list with contacts', () => {
  (0, react_2.render)(<App_1.default />);
  const ethanContact = react_2.screen.getByText(/ethan gonzalez/i);
  const bryanContact = react_2.screen.getByText(/bryan wallace/i);
  expect(ethanContact).toBeInTheDocument();
  expect(bryanContact).toBeInTheDocument();
});
