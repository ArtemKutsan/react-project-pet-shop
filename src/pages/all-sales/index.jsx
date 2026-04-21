import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';
import Filters from '../../features/Filters';
import Products from '../../features/Products';
import { loadSaleProducts } from '../../store/saleSlice';
import { filterProducts } from '../../utils/filterProducts';

export default function AllSalesPage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.sale);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sortValue, setSortValue] = useState('default');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadSaleProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = filterProducts(data, {
    priceFrom,
    priceTo,
    discountedOnly: false,
    sortValue,
  });

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <PageBreadcrumbs items={[{ label: 'Main page', to: '/' }, { label: 'All sales' }]} />
        <h2>Discounted items</h2>
        <Filters
          priceFrom={priceFrom}
          priceTo={priceTo}
          discountedOnly={false}
          sortValue={sortValue}
          showDiscountedFilter={false}
          onPriceFromChange={setPriceFrom}
          onPriceToChange={setPriceTo}
          onDiscountedChange={() => {}}
          onSortChange={setSortValue}
        />
        <Products products={filteredProducts} status={status} error={error} />
      </div>
    </section>
  );
}
