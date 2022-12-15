import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/globalStyle';
import { UserProvider } from './components/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider >
      <App />
    </UserProvider>
  </React.StrictMode>
);

