// checkout.js
const { readCart, writeCart, money, updateCartBadge } = window.__cartHelpers;

function renderCheckout() {
  const itemsContainer = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");
  if (!itemsContainer || !totalEl) return;

  const cart = readCart();
  itemsContainer.innerHTML = "";

  if (!cart || cart.length === 0) {
    itemsContainer.innerHTML = `<p>Your cart is empty 🛒 <a href="./menu.html">Go to Menu</a></p>`;
    totalEl.textContent = "₦0";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    console.log("Item debug:", item, "Price:", price, "Qty:", qty);
    const lineTotal = price * qty;
    total += lineTotal;

    const div = document.createElement("div");
    div.className = "checkout-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${money(price)} × ${qty}</p>
        <strong>${money(lineTotal)}</strong>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  totalEl.textContent = money(total);
}

function initCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const address = form.address.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !email || !address || !phone) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    alert(`✅ Thank you ${name}! Your order has been placed.`);

    writeCart([]);
    renderCheckout();
    updateCartBadge();
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
  initCheckoutForm();
});
