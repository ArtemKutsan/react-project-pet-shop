import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { getImageUrl } from '../../utils/getImageUrl';

const getDiscountPercent = (price, discountPrice) => {
  if (!discountPrice || discountPrice >= price) {
    return null;
  }

  return Math.round(((price - discountPrice) / price) * 100);
};

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const discountPercent = getDiscountPercent(product.price, product.discont_price);
  const currentPrice = product.discont_price || product.price;
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <article className="grid overflow-hidden rounded-xl border border-gray-200">
      <div className="relative bg-gray-50">
        <Link to={`/products/${product.id}`}>
          <img
            src={getImageUrl(product.image)}
            alt={product.title}
            className="aspect-square w-full object-cover"
          />
        </Link>

        {discountPercent && (
          <div className="absolute right-4 top-4 rounded-sm bg-blue-600 px-3 py-2 text-xl font-semibold text-white">
            -{discountPercent}%
          </div>
        )}

        <div className="absolute bottom-0 w-full p-4">
          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            disabled={isInCart}
            className={`min-h-10 w-full ${
              isInCart
                ? 'button border border-gray-200 bg-white hover:bg-white'
                : 'button button-primary'
            }`}
          >
            {isInCart ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>

      <div className="grid gap-4 p-5 border-t border-gray-200">
        <Link to={`/products/${product.id}`} className="grid gap-4">
          <h4 className="line-clamp-2 min-h-14 font-medium">{product.title}</h4>

          <div className="flex items-end gap-4">
            <p className="text-4xl font-semibold">${currentPrice}</p>
            {product.discont_price && (
              <p className="text-xl font-medium text-gray-500 line-through">${product.price}</p>
            )}
          </div>
        </Link>
      </div>
    </article>
  );
}
