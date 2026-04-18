import ProductItem from './ProductItem';

export default function Products({ products, status, error }) {
  if (status === 'failed') {
    return <p className="text-lg text-red-500">{error || 'Failed to load products.'}</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
