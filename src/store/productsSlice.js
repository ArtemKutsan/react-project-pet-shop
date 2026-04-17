import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByCategory, fetchProductById } from '../services/api';

const initialState = {
  allProducts: [],
  categoryProducts: [],
  currentProduct: null,
  loading: false,
  error: null,
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
  return response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(loadAllProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductsByCategory.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.loading = false;
      })
      .addCase(loadProductsByCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.loading = false;
      })
      .addCase(loadProductById.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { clearCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
