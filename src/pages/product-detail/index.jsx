import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';
import { addToCart } from '../../store/cartSlice';
import { loadCategories } from '../../store/categoriesSlice';
import { clearCurrentProduct, loadProductById } from '../../store/productsSlice';
import { getImageUrl } from '../../utils/getImageUrl';

const getDiscountPercent = (price, discountPrice) => {
  if (!discountPrice || discountPrice >= price) {
    return null;
  }

  return Math.round(((price - discountPrice) / price) * 100);
};

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, status, error } = useSelector((state) => state.products.byId);
  const categoriesState = useSelector((state) => state.categories);
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(loadProductById(id));
    }

    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (categoriesState.status === 'idle') {
      dispatch(loadCategories());
    }
  }, [categoriesState.status, dispatch]);

  if (status === 'failed') {
    return (
      <section className="py-14 md:py-20">
        <div className="container max-w-380">
          <p className="text-lg text-red-500">{error || 'Failed to load product.'}</p>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-14 md:py-20">
        <div className="container max-w-380">
          <p className="text-lg text-gray-500">Loading product...</p>
        </div>
      </section>
    );
  }

  const currentPrice = product.discont_price || product.price;
  const discountPercent = getDiscountPercent(product.price, product.discont_price);
  const category = categoriesState.data.find((item) => item.id === product.categoryId);
  const categoryTitle = category?.title || 'Categories';
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <PageBreadcrumbs
          items={[
            { label: 'Main page', to: '/' },
            { label: 'Categories', to: '/categories' },
            { label: categoryTitle, to: product.categoryId ? `/categories/${product.categoryId}` : undefined },
            { label: product.title },
          ]}
        />
        <div className="grid gap-8 md:grid-cols-[1.425fr_1fr] md:items-start">
          <div className="grid gap-8 md:grid-cols-[0.365fr_1fr]">
            <div className="order-2 md:order-1">
              <img
                src={getImageUrl(product.image)}
                alt={product.title}
                className="aspect-square w-full rounded-xl border border-gray-200 object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <img
                src={getImageUrl(product.image)}
                alt={product.title}
                className="aspect-square w-full rounded-xl border border-gray-200 object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <h3>{product.title}</h3>

            <div className="flex flex-wrap items-baseline-last gap-8">
              <p className="text-6xl font-bold">${currentPrice}</p>
              {product.discont_price && (
                <p className="text-4xl font-medium text-gray-500 line-through">${product.price}</p>
              )}
              {discountPercent && (
                <div className="self-baseline rounded-sm bg-blue-600 px-3 py-2 text-xl font-semibold text-white">
                  -{discountPercent}%
                </div>
              )}
            </div>

            <div className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)]">
              <div className="flex min-h-14 items-center overflow-hidden rounded-sm border border-gray-200">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="min-h-14 rounded-none min-w-14 justify-center border-r border-gray-200 text-4xl text-gray-500"
                >
                  -
                </button>
                <div className="flex min-h-14 grow items-center justify-center text-xl font-semibold">
                  {quantity}
                </div>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="min-h-14 rounded-none min-w-14 justify-center border-l border-gray-200 text-4xl text-gray-500"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => dispatch(addToCart({ ...product, quantity }))}
                disabled={isInCart}
                className={`min-h-14 w-full px-8 text-xl ${
                  isInCart
                    ? 'button border border-gray-200 bg-white hover:bg-white'
                    : 'button button-primary'
                }`}
              >
                {isInCart ? 'Added' : 'Add to cart'}
              </button>
            </div>

            <div className="grid gap-4">
              <h4 className="font-medium">Description</h4>
              <p className="leading-7">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
