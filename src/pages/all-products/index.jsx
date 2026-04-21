import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../features/Filters';
import Products from '../../features/Products';
import { loadAllProducts } from '../../store/productsSlice';
import { filterProducts } from '../../utils/filterProducts';

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products.all);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortValue, setSortValue] = useState('default');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadAllProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = filterProducts(data, {
    priceFrom,
    priceTo,
    discountedOnly,
    sortValue,
  });

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>All products</h2>
        <Filters
          priceFrom={priceFrom}
          priceTo={priceTo}
          discountedOnly={discountedOnly}
          sortValue={sortValue}
          onPriceFromChange={setPriceFrom}
          onPriceToChange={setPriceTo}
          onDiscountedChange={setDiscountedOnly}
          onSortChange={setSortValue}
        />
        <Products products={filteredProducts} status={status} error={error} />
      </div>
    </section>
  );
}
