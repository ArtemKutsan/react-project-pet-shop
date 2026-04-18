import Categories from '../../features/Categories';

export default function CategoriesPage() {
  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <h2>Categories</h2>

        <Categories />
      </div>
    </section>
  );
}
