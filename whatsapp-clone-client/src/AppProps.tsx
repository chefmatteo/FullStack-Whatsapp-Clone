import React from 'react';

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to the WhatsApp Clone</p>
    </div>
  );
};

export default App;
