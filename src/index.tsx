/* eslint-disable import/order */

import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
