import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/home';
import CategoriesPage from './pages/categories';
import CategoryProductsPage from './pages/category-products';
import AllProductsPage from './pages/all-products';
import AllSalesPage from './pages/all-sales';
import ProductDetailPage from './pages/product-detail';
import CartPage from './pages/cart';
import NotFoundPage from './pages/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryProductsPage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/all-sales" element={<AllSalesPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
