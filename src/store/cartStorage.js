const CART_STORAGE_KEY = 'cartItems';

export const loadCartItems = () => {
  const storedItems = localStorage.getItem(CART_STORAGE_KEY);
  return storedItems ? JSON.parse(storedItems) : [];
};

export const saveCartItems = (items) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};
