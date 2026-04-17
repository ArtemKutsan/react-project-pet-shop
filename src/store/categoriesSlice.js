import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCategories } from '../services/api';

const initialState = {
  categories: [],
  loading: false,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
