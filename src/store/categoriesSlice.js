import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCategories } from '../services/api';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const loadCategories = createAsyncThunk('categories/loadAll', async () => {
  const response = await fetchAllCategories();
  return response.data;
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default categoriesSlice.reducer;
