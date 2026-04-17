import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/categoriesSlice';
import CategoryItem from './CategoryItem';

export default function Categories() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.categories);
  const categories = data.slice(0, 4);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  return (
    <div className="bg-white py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <div className="flex flex-col md:items-center md:flex-row">
          <h2 className="mb-4 md:mb-0 md:mr-8">Categories</h2>
          <div className="hidden md:flex h-px grow bg-gray-200" />
          <Link
            to="/categories"
            className="flex items-center justify-center min-h-10 rounded-sm border border-gray-200 px-6 font-medium text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-800"
          >
            All categories
          </Link>
        </div>

        {status === 'failed' && (
          <p className="text-lg text-red-500">{error || 'Failed to load categories.'}</p>
        )}

        {status !== 'failed' && (
          <div className="grid gap-8 md:grid-cols-4">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
