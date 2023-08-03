class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addToCart(description, price, quantity) {
    this.cart.push({
      description,
      price,
      quantity,
    });
  }

  getCartPrice() {
    let totalPrice = 0;

    for (const item of this.cart) {
      totalPrice += item.price * item.quantity;
    }

    return totalPrice;
  }

  removeFromCart(description, quantity) {
    let index;
    for (let i = 0; i < this.cart.length; i++) {
      const item = this.cart[i];

      if (item.description === description) {
        index = i;
        break;
      }
    }

    if (quantity === undefined) {
      this.cart.splice(index, 1);
      return;
    }

    this.cart[index].quantity -= quantity;
  }
}

const cart = new ShoppingCart();
cart.addToCart("Shoes", 20, 2);
cart.addToCart("Apple", 2, 12);
cart.removeFromCart("Shoes");
console.log(cart.getCartPrice());
