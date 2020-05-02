import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
      <AuthProvider>
        <Theme>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
          </BrowserRouter>
        </Theme>
      </AuthProvider>
    </div>
  );
}

export default App;
