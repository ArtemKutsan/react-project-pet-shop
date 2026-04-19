import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero';
import Categories from '../../features/Categories';
import Discount from '../../features/Discount';
import Products from '../../features/Products';
import { loadCategories } from '../../store/categoriesSlice';
import { loadSaleProducts } from '../../store/saleSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.categories);
  const saleState = useSelector((state) => state.sale);
  const categories = data.slice(0, 4);
  const saleProducts = saleState.data.slice(0, 4);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (saleState.status === 'idle') {
      dispatch(loadSaleProducts());
    }
  }, [dispatch, saleState.status]);

  return (
    <>
      <Hero />
      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-380 grid gap-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="mb-4 md:mr-8 md:mb-0">Categories</h2>
            <div className="hidden h-px grow bg-gray-200 md:flex" />
          <Link
            to="/categories"
            className="flex min-h-10 items-center justify-center rounded-sm border border-gray-200 px-6 font-medium text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-800"
            >
              All categories
            </Link>
          </div>

          <Categories categories={categories} status={status} error={error} />
        </div>
      </section>
      <Discount />
      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-380 grid gap-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="mb-4 md:mr-8 md:mb-0">Sale</h2>
            <div className="hidden h-px grow bg-gray-200 md:flex" />
            <Link
              to="/all-sales"
              className="flex min-h-10 items-center justify-center rounded-sm border border-gray-200 px-6 font-medium text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-800"
            >
              All sales
            </Link>
          </div>

          <Products
            products={saleProducts}
            status={saleState.status}
            error={saleState.error}
          />
        </div>
      </section>
    </>
  );
}
