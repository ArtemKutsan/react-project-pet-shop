import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../features/Products';
import { loadAllProducts } from '../../store/productsSlice';

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products.all);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadAllProducts());
    }
  }, [dispatch, status]);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>All products</h2>
        <Products products={data} status={status} error={error} />
      </div>
    </section>
  );
}
