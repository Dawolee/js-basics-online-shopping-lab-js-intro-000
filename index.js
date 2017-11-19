var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var random = Math.floor((Math.random() * 100) + 1);
 var newItem = new Object({[item]: random});
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var current = [];
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        if (cart.length === 1) {
          current.push(`${item} at ${cart[i][item]}.`);
        }
        else if (i > 0 && i === cart.length - 1) {
          current.push(`and ${item} at ${cart[i][item]}.`);
        }
        else {
          current.push(`${item} at ${cart[i][item]}, `);
        }
      }
    }
    return current;
  }
}

function total() {
  // write your code here
  var t = 0;
  for (let i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
