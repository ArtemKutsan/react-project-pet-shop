import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoIcon, BasketIcon } from '../ui/icons';

export default function Header() {
  const itemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container max-w-380 flex h-32 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex shrink-0">
          <LogoIcon />
        </Link>

        {/* Navigation */}
        <nav className="text-xl font-medium text-gray-800 transition-colors flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600">
            Main Page
          </Link>
          <Link to="/categories" className="hover:text-blue-600">
            Categories
          </Link>
          <Link to="/all-products" className="hover:text-blue-600">
            All products
          </Link>
          <Link to="/all-sales" className="hover:text-blue-600">
            All sales
          </Link>
        </nav>

        {/* Cart */}
        <Link to="/cart" className="relative hover:text-blue-600">
          {!!itemsCount && (
            <div className="absolute left-0 top-0 flex min-h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1 text-sm font-semibold text-white">
              {itemsCount}
            </div>
          )}
          <BasketIcon />
        </Link>
      </div>
    </header>
  );
}
