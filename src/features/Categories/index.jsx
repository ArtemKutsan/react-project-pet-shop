import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';
import { loadCategories } from '../../store/categoriesSlice';

export default function Categories({ limit }) {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.categories);
  const categories = limit ? data.slice(0, limit) : data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  if (status === 'failed') {
    return <p className="text-lg text-red-500">{error || 'Failed to load categories.'}</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
