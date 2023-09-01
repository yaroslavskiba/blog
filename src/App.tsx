import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound.component';
import { GlobalStyles } from './styles/Global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import Wrapper from './Components/Wrapper';
import Registration from './Components/Main/Auth/Registration';
import Authentication from './Components/Main/Auth/Authentication';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Wrapper />}>
            <Route path='registration' element={<Registration />} />
            <Route path='authentication' element={<Authentication />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
