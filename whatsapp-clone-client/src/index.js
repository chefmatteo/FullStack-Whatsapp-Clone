'use strict';
//main entry point of the application
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const client_1 = __importDefault(require('react-dom/client'));
require('./index.css');
const App_1 = __importDefault(require('./App'));
const reportWebVitals_1 = __importDefault(require('./reportWebVitals'));
const styles_1 = require('@mui/material/styles');
const root = client_1.default.createRoot(
  document.getElementById('root')
  //react is now going to render the App component into the root element
  //root here is the div with the id root in the public/index.html file
);
const theme = (0, styles_1.createTheme)({
  palette: {
    primary: {
      main: '#306759', //Primary #306759
    },
    secondary: {
      main: '#79e352', //Secondary #79e352
    },
  },
});
root.render(
  <react_1.default.StrictMode>
    <styles_1.ThemeProvider theme={theme}>
      <App_1.default />
    </styles_1.ThemeProvider>
  </react_1.default.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
