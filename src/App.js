import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Routes
import Routes from './routes';

// GlobalStyles and Theme
import Theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <Theme>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
