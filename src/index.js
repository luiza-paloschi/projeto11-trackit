import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/globalStyle';
import { ProgressProvider } from './components/ProgressContext';
import { UserProvider } from './components/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ProgressProvider>
      <UserProvider >
        <App />
      </UserProvider>
    </ProgressProvider>
  </React.StrictMode>
);

