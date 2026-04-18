import CategoryItem from './CategoryItem';

export default function Categories({ categories, status, error }) {
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
