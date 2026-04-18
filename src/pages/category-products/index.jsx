import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Products from '../../features/Products';
import { loadProductsByCategory } from '../../store/productsSlice';

export default function CategoryProductsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, status, error } = useSelector((state) => state.products.byCategory);
  const title = data.category?.title || 'Category products';
  const products = data.data || [];

  useEffect(() => {
    if (id) {
      dispatch(loadProductsByCategory(id));
    }
  }, [dispatch, id]);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>{title}</h2>
        <Products products={products} status={status} error={error} />
      </div>
    </section>
  );
}
