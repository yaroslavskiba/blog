import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../App';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

interface CommentsInterface {
  comment: string;
  creator: string;
  creatorUid: string;
  date: string;
}

interface PostInterface {
  id: string;
  creator: string;
  creatorEmail: string;
  date: string;
  title: string;
  description: string;
  postText: string;
  readingTime: string;
  postRating: number;
  comments: CommentsInterface[];
  likes: string[];
}

export const updateLikes = createAsyncThunk(
  'posts/updateLikes',
  async (postId: string) => {
    const postRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postRef);

    return postSnap.data()?.likes;
  }
);

export const updateComments = createAsyncThunk(
  'posts/updateComments',
  async (postId: string) => {
    const postRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postRef);

    return postSnap.data()?.comments;
  }
);

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
    builder
      .addCase(getPosts.fulfilled, (_state, action) => {
        return action.payload;
      })
      .addCase(updateComments.fulfilled, (state, action) => {
        const postIndex = state.findIndex(
          (post) => post.id === action.meta.arg
        );

        if (postIndex >= 0) {
          state[postIndex].comments = action.payload;
        }

        return state;
      })
      .addCase(updateLikes.fulfilled, (state, action) => {
        const postIndex = state.findIndex(
          (post) => post.id === action.meta.arg
        );

        if (postIndex >= 0) {
          state[postIndex].likes = action.payload;
        }

        return state;
      });
  },
});

export default postsSlice.reducer;
