// =======================
// Currency Formatter
// =======================
const money = (n) =>
  `₦${Number(n || 0).toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;

// =======================
// Cart Helpers
// =======================
const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

const writeCart = (cart) => {
  // Ensure every item has a quantity
  const fixedCart = cart.map((item) => ({
    ...item,
    quantity: item.quantity && item.quantity > 0 ? item.quantity : 1,
  }));

  localStorage.setItem("cart", JSON.stringify(fixedCart));
  updateCartBadge();
  renderCartSidebar();
};

// =======================
// Navbar (Hamburger)
// =======================
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("nav-overlay");
  if (!hamburger || !navLinks || !overlay) return;

  const openNav = () => {
    document.body.classList.add("nav-open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
  };
  const closeNav = () => {
    document.body.classList.remove("nav-open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    overlay.hidden = true;
  };
  const toggleNav = () =>
    document.body.classList.contains("nav-open") ? closeNav() : openNav();

  hamburger.addEventListener("click", toggleNav);
  overlay.addEventListener("click", closeNav);

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      closeNav();
      const href = a.getAttribute("href");
      if (href && href !== "#") {
        window.location.href = href;
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNav();
  });
}

// =======================
// Cart Sidebar Renderer
// =======================
function renderCartSidebar() {
  const cart = readCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const summaryEl = document.getElementById("cart-summary");
  if (!cartItemsContainer || !totalEl || !summaryEl) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;
  let itemCount = 0;

  cart.forEach((item, idx) => {
    const li = document.createElement("div");
    li.className = "cart-item";

    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    itemCount += item.quantity;

    li.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <span class="cart-item-title">${item.name}</span>
        <span class="cart-item-meta">${money(item.price)} × ${
      item.quantity
    } = ${money(lineTotal)}</span>
        <div class="cart-item-qty">
          <button aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove" aria-label="Remove item">Remove</button>
    `;

    const [decBtn, , incBtn] = li.querySelectorAll(
      ".cart-item-qty button, .cart-item-qty span"
    );
    const removeBtn = li.querySelector(".cart-item-remove");

    decBtn.addEventListener("click", () => {
      const c = readCart();
      c[idx].quantity = Math.max(1, c[idx].quantity - 1);
      writeCart(c);
    });
    incBtn.addEventListener("click", () => {
      const c = readCart();
      c[idx].quantity += 1;
      writeCart(c);
    });
    removeBtn.addEventListener("click", () => {
      const c = readCart();
      c.splice(idx, 1);
      writeCart(c);
    });

    cartItemsContainer.appendChild(li);
  });

  totalEl.textContent = money(total);
  summaryEl.textContent = `(${itemCount} ${
    itemCount === 1 ? "item" : "items"
  })`;
}

// =======================
// Cart Sidebar Logic
// =======================
function initCartSidebar() {
  const cartSidebar = document.getElementById("cart");
  const cartToggle = document.getElementById("cartToggle");
  const closeCart = document.getElementById("closeCart");
  const overlay = document.getElementById("cartOverlay");
  const clearCartBtn = document.getElementById("clearCart");
  if (!cartSidebar || !cartToggle || !closeCart || !overlay) return;

  const open = () => {
    cartSidebar.classList.add("active");
    cartSidebar.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    renderCartSidebar();
  };
  const close = () => {
    cartSidebar.classList.remove("active");
    cartSidebar.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
  };

  cartToggle.addEventListener("click", open);
  closeCart.addEventListener("click", close);
  overlay.addEventListener("click", close);
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      writeCart([]);
    });
  }
}

// =======================
// Cart Badge
// =======================
function updateCartBadge() {
  const cartToggle = document.getElementById("cartToggle");
  if (!cartToggle) return;
  const cart = readCart();
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  cartToggle.setAttribute("data-count", count);
}

// =======================
// Scroll to Top
// =======================
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "grid" : "none";
  });
  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// =======================
// Storage Sync
// =======================
window.addEventListener("storage", (e) => {
  if (e.key === "cart") {
    updateCartBadge();
    renderCartSidebar();
  }
});

// =======================
// Init
// =======================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCartSidebar();
  initScrollToTop();
  updateCartBadge();
  renderCartSidebar();
});

// Expose helpers
window.__cartHelpers = {
  readCart,
  writeCart,
  money,
  updateCartBadge,
  renderCartSidebar,
};
