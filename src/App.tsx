import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound.component';
import { GlobalStyles } from './styles/Global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyles />
        <Routes>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
