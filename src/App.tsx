/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import { useAppDispatch } from './app/hooks';
import ChangeToAuthor from './Components/Main/Profile/ChangeToAuthor';
import CreatePost from './Components/Main/Blog/CreatePost/CreatePost';
import Posts from './Components/Main/Blog/Posts';
import { getPosts } from './app/slices/postsSlice';
import Post from './Components/Main/Blog/Post';
import OtherUserProfile from './Components/Main/Profile/OtherUserProfile';

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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(getPosts());
    navigate('/posts');
  }, [user, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Wrapper />}>
            <Route path='posts' element={<Posts />} />
            <Route path='posts/:id' element={<Post />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='signIn' element={<SignIn />} />
            <Route path='profile' element={<Profile />} />
            <Route path='user/:uid' element={<OtherUserProfile />} />
            <Route path='change_to_author' element={<ChangeToAuthor />} />
            <Route path='createPost' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
