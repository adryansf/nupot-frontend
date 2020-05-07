import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Chatbot from 'react-messenger-customer-chat';

// Auth state
import AuthProvider from './contexts/AuthContext';

// Routes
import Routes from './routes';

// GlobalStyles and Theme
import Theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      {/* Estamos em fase de testes. Nos ajude a melhorar, nos envie seu feedback */}
      <AuthProvider>
        <Theme>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
          </BrowserRouter>
        </Theme>
      </AuthProvider>
      <Chatbot pageId="100458851661545" appId="663023314533039" />
    </div>
  );
}

export default App;
