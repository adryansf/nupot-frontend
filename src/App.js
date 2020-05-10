import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Chatbot from 'react-messenger-customer-chat';
import Feedback from '~/components/Feedback';

// Global states
import AuthProvider from './contexts/AuthContext';
import ShopProvider from './contexts/ShopContext';

// Routes
import Routes from './routes';

// GlobalStyles and Theme
import Theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShopProvider>
          <Theme>
            <BrowserRouter>
              <Routes />
              <GlobalStyles />
            </BrowserRouter>
          </Theme>
        </ShopProvider>
        <Feedback />
      </AuthProvider>
      <Chatbot pageId="100458851661545" appId="663023314533039" />
    </div>
  );
}

export default App;
