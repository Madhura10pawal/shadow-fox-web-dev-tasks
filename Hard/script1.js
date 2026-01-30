const productsData = [
  { name: "Mobile", price: 15000, category: "electronics" },
  { name: "Laptop", price: 40000, category: "electronics" },
  { name: "T-Shirt", price: 500, category: "fashion" },
  { name: "Shoes", price: 2000, category: "fashion" }
];

let cart = [];
let filteredProducts = [...productsData];

function displayProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  filteredProducts = category === "all"
    ? productsData
    : productsData.filter(p => p.category === category);

  displayProducts(filteredProducts);
}

function sortProducts() {
  const sort = document.getElementById("sortPrice").value;
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  displayProducts(filteredProducts);
}

function addToCart(index) {
  cart.push(filteredProducts[index]);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    cartList.appendChild(li);
  });
}

function checkout() {
  alert("Checkout Successful!");
  cart = [];
  updateCart();
}

displayProducts(productsData);
