import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../../App';
import { doc, getDoc } from 'firebase/firestore';

interface UserInterface {
  name: string;
  description: string;
  birthDate: string;
  gender: '';
  status: 'Reader' | 'Author';
  image: null | string;
}

const initialState: UserInterface = {
  name: '',
  description: '',
  birthDate: '',
  gender: '',
  status: 'Reader',
  image: null,
};

export const fetchUserData = createAsyncThunk(
  'userSlice/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data();
        }
      }
      return null;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.name = action.payload?.name || '';
      state.description = action.payload?.description || '';
      state.birthDate = action.payload?.birthDate || '';
      state.gender = action.payload?.gender || '';
      state.image = action.payload?.image || null;
      state.status = action.payload?.status || '';
    });
  },
});

export default userSlice.reducer;
