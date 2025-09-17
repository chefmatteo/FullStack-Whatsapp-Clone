'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
require('./App.css');
const ChatsListScreen_1 = __importDefault(
  require('./components/ChatsListScreen')
);
function App() {
  return (
    <div className="App">
      <ChatsListScreen_1.default />
    </div>
  );
}
exports.default = App;
//exporting the App component so it can be used in other files
