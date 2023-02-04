import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './styles/style';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={ theme }>
        <Provider store={ store }>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);