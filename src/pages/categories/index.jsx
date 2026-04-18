import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../features/Categories';
import { loadCategories } from '../../store/categoriesSlice';

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>Categories</h2>

        <Categories categories={data} status={status} error={error} />
      </div>
    </section>
  );
}
