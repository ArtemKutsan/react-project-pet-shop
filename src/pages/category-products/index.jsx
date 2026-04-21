import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Filters from '../../features/Filters';
import Products from '../../features/Products';
import { loadProductsByCategory } from '../../store/productsSlice';
import { filterProducts } from '../../utils/filterProducts';

export default function CategoryProductsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, status, error } = useSelector((state) => state.products.byCategory);
  const title = data.category?.title || 'Category products';
  const products = data.data || [];
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortValue, setSortValue] = useState('default');

  useEffect(() => {
    if (id) {
      dispatch(loadProductsByCategory(id));
    }
  }, [dispatch, id]);

  const filteredProducts = filterProducts(products, {
    priceFrom,
    priceTo,
    discountedOnly,
    sortValue,
  });

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>{title}</h2>
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
