import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../App';

interface UserInterface {
  uId: string;
  userEmail: string | null;
}

const initialState: UserInterface = {
  uId: '',
  userEmail: '',
};

export const checkAuthUser = createAsyncThunk(
  'AuthUserSlice/checkAuthUser',
  async () => {
    const user = auth.currentUser;
    if (user) {
      return { uId: user.uid, userEmail: user.email };
    } else {
      return { uId: '', userEmail: '' };
    }
  }
);

const AuthUserSlice = createSlice({
  name: 'AuthUserSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthUser.fulfilled, (state, action) => {
      const { uId, userEmail } = action.payload;
      state.uId = uId;
      state.userEmail = userEmail;
    });
  },
});

export const authUserReducer = AuthUserSlice.reducer;

export default AuthUserSlice;
