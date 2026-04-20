import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByCategory, fetchProductById } from '../services/api';

const initialState = {
  all: {
    data: [],
    status: 'idle',
    error: null,
  },
  byCategory: {
    data: [],
    status: 'idle',
    error: null,
  },
  byId: {
    data: null,
    status: 'idle',
    error: null,
  },
};

export const loadAllProducts = createAsyncThunk('products/loadAll', async () => {
  const response = await fetchAllProducts();
  return response.data;
});

export const loadProductsByCategory = createAsyncThunk(
  'products/loadByCategory',
  async (categoryId) => {
    const response = await fetchProductsByCategory(categoryId);
    return response.data;
  },
);

export const loadProductById = createAsyncThunk('products/loadById', async (id) => {
  const response = await fetchProductById(id);
  return Array.isArray(response.data) ? response.data[0] : response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearCurrentProduct: (state) => {
      state.byId = { data: null, status: 'idle', error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      // --- loadAllProducts ---
      .addCase(loadAllProducts.pending, (state) => {
        state.all.status = 'loading';
        state.all.error = null;
      })
      .addCase(loadAllProducts.fulfilled, (state, action) => {
        state.all.data = action.payload;
        state.all.status = 'succeeded';
      })
      .addCase(loadAllProducts.rejected, (state, action) => {
        state.all.error = action.error.message;
        state.all.status = 'failed';
      })
      // --- loadProductsByCategory ---
      .addCase(loadProductsByCategory.pending, (state) => {
        state.byCategory.status = 'loading';
        state.byCategory.error = null;
      })
      .addCase(loadProductsByCategory.fulfilled, (state, action) => {
        state.byCategory.data = action.payload;
        state.byCategory.status = 'succeeded';
      })
      .addCase(loadProductsByCategory.rejected, (state, action) => {
        state.byCategory.error = action.error.message;
        state.byCategory.status = 'failed';
      })
      // --- loadProductById ---
      .addCase(loadProductById.pending, (state) => {
        state.byId.status = 'loading';
        state.byId.error = null;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.byId.data = action.payload;
        state.byId.status = 'succeeded';
      })
      .addCase(loadProductById.rejected, (state, action) => {
        state.byId.error = action.error.message;
        state.byId.status = 'failed';
      });
  },
});

export const { clearCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
