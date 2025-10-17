document.addEventListener("DOMContentLoaded", () => {
  const order = JSON.parse(localStorage.getItem("lastOrder")) || {};
  const { customer, cart, total } = order;
  const payBtn = document.getElementById("payNowBtn");
  const detailsBox = document.getElementById("order-details");
  const itemsBox = document.getElementById("order-items");

  if (!cart || cart.length === 0) {
    itemsBox.innerHTML = "<p>No order found. Please return to the menu.</p>";
    payBtn.disabled = true;
    return;
  }

  // Render order summary
  detailsBox.innerHTML = `
    <div class="order-info">
      <h3>Customer Information</h3>
      <p><strong>Name:</strong> ${customer?.name}</p>
      <p><strong>Email:</strong> ${customer?.email}</p>
      <p><strong>Phone:</strong> ${customer?.phone}</p>
      <p><strong>Address:</strong> ${customer?.address}</p>
      <h3>Total Amount: ₦${total.toLocaleString("en-NG")}</h3>
    </div>
  `;

  itemsBox.innerHTML = cart
    .map(
      (item) => `
      <div class="checkout-item">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>${item.quantity} × ₦${item.price.toLocaleString("en-NG")}</p>
          <strong>₦${(item.price * item.quantity).toLocaleString(
            "en-NG"
          )}</strong>
        </div>
      </div>
    `
    )
    .join("");

  // Initialize Paystack Payment
  payBtn.addEventListener("click", () => {
    const handler = PaystackPop.setup({
      key: "pk_live_61862ef8139850da42ddb1c6257b04d80c190dc3",
      email: customer.email,
      phone: customer.phone,
      name: customer.name,
      amount: total * 100, // Amount in kobo
      currency: "NGN",
      ref: "DEELAH-" + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        // Payment success
        alert("✅ Payment successful! Reference: " + response.reference);
        localStorage.removeItem("cart");
        localStorage.removeItem("lastOrder");
        window.location.href = "./thank-you.html";
      },
      onClose: function () {
        alert("Payment cancelled ❌");
      },
    });

    handler.openIframe();
  });
});
