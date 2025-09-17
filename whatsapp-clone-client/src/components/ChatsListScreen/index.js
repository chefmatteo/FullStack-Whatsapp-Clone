'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const ChatsNavBar_1 = __importDefault(require('./ChatsNavBar'));
const ChatsList_1 = __importDefault(require('./ChatsList'));
const styled_components_1 = __importDefault(require('styled-components'));
const Container = styled_components_1.default.div`
  height: 100vh;
`;
const ChatsListScreen = () => {
  return (
    <Container>
      <ChatsNavBar_1.default />
      <ChatsList_1.default />
    </Container>
  );
};
exports.default = ChatsListScreen;
