document.addEventListener("DOMContentLoaded", () => {
  if (!window.__cartHelpers) {
    console.error("⚠️ app.js not loaded before checkout.js!");
    return;
  }

  const { readCart, writeCart, money, updateCartBadge } = window.__cartHelpers;
  renderCheckout();
});

function renderCheckout() {
  const itemsContainer = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");
  if (!itemsContainer || !totalEl) return;

  const cart = window.__cartHelpers.readCart();
  console.log("Cart data loaded:", cart);
  itemsContainer.innerHTML = "";

  if (!cart || cart.length === 0) {
    itemsContainer.innerHTML = `<p>Your cart is empty 🛒 <a href="./menu.html">Go to Menu</a></p>`;
    totalEl.textContent = "₦0";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const price = parseFloat(item.price) || 0;
    const qty = parseInt(item.quantity) || 1;
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

document.addEventListener("DOMContentLoaded", renderCheckout);
