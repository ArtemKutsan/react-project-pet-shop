import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../features/Products';
import { loadSaleProducts } from '../../store/saleSlice';

export default function AllSalesPage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.sale);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadSaleProducts());
    }
  }, [dispatch, status]);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>Discounted items</h2>
        <Products products={data} status={status} error={error} />
      </div>
    </section>
  );
}
