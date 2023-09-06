import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../App';
import { collection, getDocs } from 'firebase/firestore';

interface PostInterface {
  id: string;
  creator: string;
  creatorEmail: string;
  date: string;
  timestamp: string;
  title: string;
  description: string;
  postText: string;
  readingTime: string;
  postRating: number;
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const postsRef = collection(db, 'posts');
  const snapshot = await getDocs(postsRef);
  const posts: PostInterface[] = [];

  snapshot.forEach((doc) => {
    const post = { id: doc.id, ...doc.data() } as PostInterface;
    posts.push(post);
  });

  return posts;
});

const initialState: PostInterface[] = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postsSlice.reducer;
