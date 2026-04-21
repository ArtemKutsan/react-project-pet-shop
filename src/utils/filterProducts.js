const getCurrentPrice = (product) => product.discont_price || product.price;

export const filterProducts = (products, filters) => {
  let filteredProducts = [...products];

  if (filters.priceFrom) {
    filteredProducts = filteredProducts.filter(
      (product) => getCurrentPrice(product) >= Number(filters.priceFrom),
    );
  }

  if (filters.priceTo) {
    filteredProducts = filteredProducts.filter(
      (product) => getCurrentPrice(product) <= Number(filters.priceTo),
    );
  }

  if (filters.discountedOnly) {
    filteredProducts = filteredProducts.filter(
      (product) => product.discont_price && product.discont_price < product.price,
    );
  }

  if (filters.sortValue === 'price-asc') {
    filteredProducts.sort((first, second) => getCurrentPrice(first) - getCurrentPrice(second));
  }

  if (filters.sortValue === 'price-desc') {
    filteredProducts.sort((first, second) => getCurrentPrice(second) - getCurrentPrice(first));
  }

  if (filters.sortValue === 'title-asc') {
    filteredProducts.sort((first, second) => first.title.localeCompare(second.title));
  }

  if (filters.sortValue === 'title-desc') {
    filteredProducts.sort((first, second) => second.title.localeCompare(first.title));
  }

  return filteredProducts;
};
