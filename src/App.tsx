import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound.component';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
