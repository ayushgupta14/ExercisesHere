import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';
import store from './ReduxComps/Store';

import { BrowserRouter } from 'react-router-dom';

import ThemeContextProvider from './Context/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
        <Toaster />
      </ThemeContextProvider>
    </Provider>
  </BrowserRouter>
);