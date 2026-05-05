let cart = [];

function buy(product){
  cart.push(product);

  document.getElementById("cart-count").innerText = cart.length;

  let list = document.getElementById("cart-items");
  let item = document.createElement("li");
  item.innerText = product;
  list.appendChild(item);

  alert(product + " added to cart 🚀");
}

function showCart(){
  document.getElementById("cart-box").style.display = "block";
}
