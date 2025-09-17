'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const db_1 = require('../../db');
const moment_1 = __importDefault(require('moment'));
const material_1 = require('@mui/material');
const styled_components_1 = __importDefault(require('styled-components'));
const Container = styled_components_1.default.div`
  height: calc(100% - 56px);
  overflow-y: overlay;
`;
const StyledList = (0, styled_components_1.default)(material_1.List)`
  padding: 0 !important;
`;
const StyledListItem = (0, styled_components_1.default)(material_1.ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;
const ChatPicture = styled_components_1.default.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
const ChatInfo = styled_components_1.default.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;
const ChatName = styled_components_1.default.div`
  margin-top: 5px;
`;
const MessageContent = styled_components_1.default.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const MessageDate = styled_components_1.default.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;
const ChatsList = () => (
  <Container>
    <StyledList>
      {db_1.chats.map(chat => (
        <StyledListItem key={chat.id}>
          <ChatPicture src={chat.picture} alt="Profile" />
          <ChatInfo>
            <ChatName>{chat.name}</ChatName>
            {chat.lastMessage && (
              <react_1.default.Fragment>
                <MessageContent>{chat.lastMessage.content}</MessageContent>
                <MessageDate>
                  {(0, moment_1.default)(chat.lastMessage.createdAt).format(
                    'HH:mm'
                  )}
                </MessageDate>
              </react_1.default.Fragment>
            )}
          </ChatInfo>
        </StyledListItem>
      ))}
    </StyledList>
  </Container>
);
exports.default = ChatsList;
