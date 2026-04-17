import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const fetchAllCategories = () => api.get('/categories/all');
export const fetchProductsByCategory = (categoryId) => api.get(`/categories/${categoryId}`);
export const fetchAllProducts = () => api.get('/products/all');
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const fetchSaleProducts = () => api.get('/sale');
export const submitOrder = (orderData) => api.post('/order/send', orderData);
