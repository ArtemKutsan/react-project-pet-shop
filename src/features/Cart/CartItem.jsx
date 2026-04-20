import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import { getImageUrl } from '../../utils/getImageUrl';

const getCurrentPrice = (item) => item.discont_price || item.price;

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const currentPrice = getCurrentPrice(item);
  const totalPrice = currentPrice * item.quantity;

  return (
    <article className="grid overflow-hidden rounded-xl border border-gray-200 md:grid-cols-[200px_minmax(0,1fr)]">
      <Link to={`/products/${item.id}`} className="bg-gray-50">
        <img
          src={getImageUrl(item.image)}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="grid gap-6 p-8">
        <div className="flex items-start justify-between gap-4">
          <Link to={`/products/${item.id}`} className="min-w-0">
            <h5 className="line-clamp-2 font-medium">{item.title}</h5>
          </Link>

          <button
            type="button"
            onClick={() => dispatch(removeFromCart(item.id))}
            className="size-8 justify-center text-4xl text-gray-500 transition-colors hover:text-gray-800"
            aria-label={`Remove ${item.title} from cart`}
          >
            ×
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <div className="flex min-h-14 items-center overflow-hidden rounded-sm border border-gray-200">
            <button
              type="button"
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              className="min-h-14 min-w-14 justify-center border-r border-gray-200 text-2xl text-gray-500"
            >
              -
            </button>
            <div className="flex min-h-14 min-w-16 items-center justify-center text-xl font-medium">
              {item.quantity}
            </div>
            <button
              type="button"
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              className="min-h-14 min-w-14 justify-center border-l border-gray-200 text-4xl text-gray-500"
            >
              +
            </button>
          </div>

          <div className="flex items-end gap-4">
            <p className="text-4xl font-semibold">${totalPrice}</p>
            {item.discont_price && (
              <p className="text-xl font-medium text-gray-500 line-through">
                ${item.price * item.quantity}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
