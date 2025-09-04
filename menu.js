function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}

function initMenuCounters() {
  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach((card) => {
    const decreaseBtn = card.querySelector(".decrease");
    const increaseBtn = card.querySelector(".increase");
    const countEl = card.querySelector(".count");
    const cartBtn = card.querySelector(".cart-btn");

    if (!decreaseBtn || !increaseBtn || !countEl || !cartBtn) return;

    let count = 1;

    const updateCount = (newCount) => {
      count = Math.max(1, newCount);
      countEl.textContent = count;
    };

    increaseBtn.addEventListener("click", () => updateCount(count + 1));
    decreaseBtn.addEventListener("click", () => updateCount(count - 1));

    cartBtn.addEventListener("click", () => {
      const itemName = card.querySelector("h3")?.textContent || "Item";
      alert(`${count} × ${itemName} added to cart 🛒`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initMenuCounters();
});

const menuItems = {
  Breakfast: [
    {
      name: "Classic Burger",
      desc: "Juicy grilled beef with fresh lettuce, cheese & sauce.",
      price: 3500,
      img: "./images/still-life-delicious-american-hamburger.jpg",
    },
    {
      name: "Spaghetti",
      desc: "Loaded with extra cheese, pickles & special sauce.",
      price: 6000,
      img: "./images/pasta-spaghetti-with-shrimps-tomato-sauce-served-plate-dark-surface-closeup.jpg",
    },
  ],
  Lunch: [
    {
      name: "Creamy Pasta",
      desc: "Italian-inspired pasta with rich creamy sauce.",
      price: 4500,
      img: "./images/penne-pasta-cream-cheese.jpg",
    },
    {
      name: "Spaghetti",
      desc: "Classic spaghetti served with rich tomato sauce.",
      price: 3000,
      img: "./images/spaghetti.jpg",
    },
  ],
  Dinner: [
    {
      name: "Fresh Salad",
      desc: "A refreshing mix of greens, cucumbers & herbs.",
      price: 2500,
      img: "./images/vitamin-salad-young-vegetables-cabbage-radish-cucumber-fresh-herbs.jpg",
    },
    {
      name: "Greek Salad",
      desc: "Olives, feta cheese, and crunchy veggies.",
      price: 2800,
      img: "./images/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg",
    },
  ],
  Drinks: [
    {
      name: "Cocktail",
      desc: "Refreshing fruit cocktail served chilled.",
      price: 2000,
      img: "./images/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg",
    },
    {
      name: "Fresh Juice",
      desc: "Made with seasonal fruits for a natural taste.",
      price: 1500,
      img: "./images/whitney-wright-TgQkxQc-t_U-unsplash.jpg",
    },
  ],
};

function renderMenu(category = "All") {
  const container = document.querySelector(".menu-grid");
  container.innerHTML = "";

  const items =
    category === "All"
      ? Object.values(menuItems).flat()
      : menuItems[category] || [];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <span class="price">₦${item.price}</span>
      <div class="menu-actions">
        <div class="counter">
          <button class="decrease">-</button>
          <span class="count">1</span>
          <button class="increase">+</button>
        </div>
        <button class="cart-btn">Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });

  initMenuCounters();
}

function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      renderMenu(btn.dataset.target);
    });
  });

  renderMenu("All");
}
