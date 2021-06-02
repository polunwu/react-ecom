export const addItemToCart = (cartItems, cartItemToAdd) => {
  let exist = false;
  let newCartItems = cartItems.map((item) => {
    if (item.id === cartItemToAdd.id) {
      item.quantity++;
      exist = true;
    }
    return item;
  });

  if (!exist) {
    newCartItems.push({ ...cartItemToAdd, quantity: 1 });
  }

  return newCartItems;
};
