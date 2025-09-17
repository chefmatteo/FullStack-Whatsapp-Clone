'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const material_1 = require('@mui/material');
const styled_components_1 = __importDefault(require('styled-components'));
const Container = (0, styled_components_1.default)(material_1.Toolbar)`
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
`;
const ChatsNavBar = () => <Container>Whatsapp Clone</Container>;
exports.default = ChatsNavBar;
