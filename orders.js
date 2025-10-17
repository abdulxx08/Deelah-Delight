document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("orders-container");

  // Load saved orders from localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!orders.length) return;

  container.innerHTML = `
    <div class="orders-grid">
      ${orders
        .map(
          (order) => `
        <div class="order-card">
          <div class="order-header">
            <h3>Order #${order.ref}</h3>
            <span class="order-date">${new Date(
              order.date
            ).toLocaleString()}</span>
          </div>
          <div class="order-body">
            <p><strong>Total:</strong> ₦${order.total.toLocaleString()}</p>
            <p><strong>Status:</strong> <span class="status success">Paid</span></p>
          </div>
          <div class="order-items">
            ${order.items
              .map(
                (i) => `
              <div class="order-item">
                <img src="${i.img}" alt="${i.name}">
                <div>
                  <p>${i.name}</p>
                  <span>${i.quantity} × ₦${i.price.toLocaleString()}</span>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
});
