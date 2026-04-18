import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Categories from '../../features/Categories';
import Discount from '../../features/Discount';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-380 grid gap-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="mb-4 md:mr-8 md:mb-0">Categories</h2>
            <div className="hidden h-px grow bg-gray-200 md:flex" />
          <Link
            to="/categories"
            className="flex min-h-10 items-center justify-center rounded-sm border border-gray-200 px-6 font-medium text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-800"
            >
              All categories
            </Link>
          </div>

          <Categories limit={4} />
        </div>
      </section>
      <Discount />
    </>
  );
}
