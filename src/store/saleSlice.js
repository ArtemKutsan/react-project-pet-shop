import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSaleProducts } from '../services/api';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const loadSaleProducts = createAsyncThunk('sale/loadProducts', async () => {
  const response = await fetchSaleProducts();
  return response.data;
});

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSaleProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadSaleProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadSaleProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default saleSlice.reducer;
