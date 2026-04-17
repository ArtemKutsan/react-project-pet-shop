import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSaleProducts } from '../services/api';

const initialState = {
  products: [],
  loading: false,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSaleProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(loadSaleProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default saleSlice.reducer;
