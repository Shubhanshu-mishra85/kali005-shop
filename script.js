let cart = [];

function addToCart(product){
  cart.push(product);

  document.getElementById("cart-count").innerText = cart.length;

  let list = document.getElementById("cart-items");
  let item = document.createElement("li");
  item.innerText = product;
  list.appendChild(item);
}
