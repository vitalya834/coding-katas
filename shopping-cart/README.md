# ShoppingCart

## addToCart method

```js
const cart = new ShoppingCart();
cart.addToCart("Tomato", 1, 5);
const price = cart.getCartPrice();
console.log(price); // 5
```

```js
const cart = new ShoppingCart();
cart.addToCart("Tomato", 1, 5);
cart.addToCart("Apple", 0.5, 2);
const price = cart.getCartPrice();
console.log(price); // 6
```

## removeFromCart method

```js
const cart = new ShoppingCart();

cart.addToCart("Tomato", 1, 5);

let price = cart.getCartPrice();
console.log(price); // 5

cart.removeFromCart("Tomato");
price = cart.getCartPrice();
console.log(price); // 0
```

```js
const cart = new ShoppingCart();

cart.addToCart("Tomato", 1, 5);

let price = cart.getCartPrice();
console.log(price); // 5

cart.removeFromCart("Tomato", 2);
price = cart.getCartPrice();
console.log(price); // 3
```
