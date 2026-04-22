import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoIcon, BasketIcon, BurgerIcon } from '../ui/icons';

const navItems = [
  { to: '/', label: 'Main Page' },
  { to: '/categories', label: 'Categories' },
  { to: '/all-products', label: 'All products' },
  { to: '/all-sales', label: 'All sales' },
];

export default function Header() {
  const itemsCount = useSelector((state) => state.cart.items.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-200 bg-white">
      <div className="container max-w-380 flex h-24 items-center justify-between md:h-32">
        {/* Logo */}
        <Link to="/" className="flex shrink-0">
          <LogoIcon />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-xl font-medium text-gray-800 transition-colors md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex min-h-12 min-w-12 items-center justify-center px-0 text-gray-800 md:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <BurgerIcon />
        </button>

        {/* Cart */}
        <Link to="/cart" className="relative ml-4 hover:text-blue-600 md:ml-0">
          {!!itemsCount && (
            <div className="absolute left-0 top-0 flex min-h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1 text-sm font-semibold text-white">
              {itemsCount}
            </div>
          )}
          <BasketIcon />
        </Link>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="container max-w-380 grid gap-4 py-6 text-xl font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
