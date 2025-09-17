'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.chats = exports.messages = void 0;
exports.messages = [
  {
    id: '1',
    content: 'You on your way?',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: '2',
    content: "Hey, it's me",
    createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
  },
  {
    id: '3',
    content: 'I should buy a boat',
    createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000),
  },
  {
    id: '4',
    content: 'This is wicked good ice cream.',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000),
  },
];
exports.chats = [
  {
    id: '1',
    name: 'Ethan Gonzalez',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    lastMessage: exports.messages.find(m => m.id === '1'),
  },
  {
    id: '2',
    name: 'Bryan Wallace',
    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    lastMessage: exports.messages.find(m => m.id === '2'),
  },
  {
    id: '3',
    name: 'Avery Stewart',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    lastMessage: exports.messages.find(m => m.id === '3'),
  },
  {
    id: '4',
    name: 'Katie Peterson',
    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    lastMessage: exports.messages.find(m => m.id === '4'),
  },
];
