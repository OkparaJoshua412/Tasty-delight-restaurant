function input() {
  const name = document.getElementById('name').value.trim();
  const login = document.getElementById('login').value.trim();
  const address = document.getElementById('address').value.trim();
  const order = document.getElementById('order').value.trim();
  const message = document.getElementById('demo');

  if (!name || !login || !address || !order) {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill in all fields before placing your order.";
  } else {
    message.style.color = "green";
    message.textContent = "✅ Your order has been received! It’s on the way 🚀.";
    document.getElementById("orderForm").reset();
  }
}