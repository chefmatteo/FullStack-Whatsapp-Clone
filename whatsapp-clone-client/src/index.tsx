//main entry point of the application

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApolloProvider } from 'react-apollo';
import client from './client';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  //react is now going to render the App component into the root element
  //root here is the div with the id root in the public/index.html file
);

const theme = createTheme({
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
// The root.render method is used to render the React component tree into the root DOM element of the HTML page.
// In this application, it mounts the entire React app (wrapped with providers for Apollo Client and Material-UI theme) into the <div id="root"></div> element found in public/index.html.
// This is the entry point where React takes control of the UI and starts managing the DOM updates.

//The code above uses the Context/Provider API, thus the client is now known globally. Now that we can use the useQuery() hook, there's no need to use the native Fetch API anymore. Let's replace all our Fetch API call instances with a React hook:
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
