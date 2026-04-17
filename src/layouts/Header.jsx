import { Link } from 'react-router-dom';
import { LogoIcon, BasketIcon } from '../ui/icons';

export default function Header() {
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
        <Link to="/cart" className="hover:text-blue-600">
          <BasketIcon />
        </Link>
      </div>
    </header>
  );
}
