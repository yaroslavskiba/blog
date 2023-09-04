import React, { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound.component';
import { GlobalStyles } from './styles/Global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import Wrapper from './Components/Wrapper';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';
import Profile from './Components/Main/Profile/Profile';
import SignIn from './Components/Main/Auth/SignIn';
import SignUp from './Components/Main/Auth/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { fetchUserData } from './app/slices/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-Ca6rfpglJ8YNXZGALRHBChoOh7TIQek',
  authDomain: 'blog-app-dbdf8.firebaseapp.com',
  projectId: 'blog-app-dbdf8',
  storageBucket: 'blog-app-dbdf8.appspot.com',
  messagingSenderId: '311005018967',
  appId: '1:311005018967:web:371cb9b09a3fc61d249c12',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

function App() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [user, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Wrapper />}>
            <Route path='signUp' element={<SignUp />} />
            <Route path='signIn' element={<SignIn />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
