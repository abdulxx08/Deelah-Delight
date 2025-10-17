document.addEventListener("DOMContentLoaded", () => {
  const menuItems = {
    Breakfast: [
      {
        id: "burger1",
        name: "Classic Burger",
        price: 3500,
        img: "./images/still-life-delicious-american-hamburger.jpg",
        desc: "Juicy grilled beef with fresh lettuce, cheese & sauce.",
      },
      {
        id: "yam1",
        name: "Yam and Egg Sauce",
        price: 3500,
        img: "./images/fish-chip.jpg",
        desc: "Loaded with extra cheese, pickles & special sauce.",
      },
      {
        id: "toast1",
        name: "Toast Breakfast",
        price: 1500,
        img: "./images/front-close-view-tasty-toast-sandwiches-with-cheese-ham-inside-blue-plate-with-juice-french-friessnack.jpg",
        desc: "Crispy golden toast with eggs & fresh veggies.",
      },
      {
        id: "noodles1",
        name: "Stir-Fried Noodles",
        price: 3200,
        img: "./images/lifestyle-food-gourmet-comida-gastronomy.jpg",
        desc: "Savory noodles with fresh veggies & soy sauce.",
      },
    ],
    Lunch: [
      {
        id: "pasta2",
        name: "Creamy Pasta",
        price: 4500,
        img: "./images/penne-pasta-cream-cheese.jpg",
        desc: "Italian-inspired pasta with rich creamy sauce.",
      },
      {
        id: "spag2",
        name: "Spaghetti",
        price: 3000,
        img: "./images/pasta-spaghetti-with-shrimps-tomato-sauce-served-plate-dark-surface-closeup.jpg",
        desc: "Classic spaghetti served with tomato sauce.",
      },
    ],
    Dinner: [
      {
        id: "salad1",
        name: "Fresh Salad",
        price: 2500,
        img: "./images/vitamin-salad-young-vegetables-cabbage-radish-cucumber-fresh-herbs.jpg",
        desc: "Refreshing greens, cucumbers & herbs.",
      },
      {
        id: "salad2",
        name: "Greek Salad",
        price: 2800,
        img: "./images/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg",
        desc: "Olives, feta cheese & crunchy veggies.",
      },
    ],
    Drinks: [
      {
        id: "drink1",
        name: "Cocktail",
        price: 2000,
        img: "./images/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg",
        desc: "Refreshing chilled fruit cocktail.",
      },
      {
        id: "drink2",
        name: "Fresh Juice",
        price: 500,
        img: "./images/whitney-wright-TgQkxQc-t_U-unsplash.jpg",
        desc: "Made with seasonal fruits, no sugar added.",
      },
    ],
  };

  // Flatten for "All"
  menuItems.All = Object.values(menuItems).flat();

  const {
    readCart: getCart,
    writeCart: saveCart,
    money: formatMoney,
    updateCartBadge,
  } = window.__cartHelpers;

  const container = document.getElementById("menuContainer");
  const tabs = document.querySelectorAll(".tab-btn");
  const searchInput = document.getElementById("menuSearch");

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Template
  function cardTemplate(item) {
    const isFav = favorites.includes(item.id);
    return `
      <div class="menu-card fade-in" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}" />
        <div class="menu-card-content">
          <div class="menu-header">
            <h3>${item.name}</h3>
            <button class="fav-btn ${isFav ? "active" : ""}" data-id="${
      item.id
    }" title="Add to favorites">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <p>${item.desc}</p>
          <span class="price">${formatMoney(item.price)}</span>
          <div class="menu-actions">
            <div class="counter">
              <button class="decrease">-</button>
              <span class="count">1</span>
              <button class="increase">+</button>
            </div>
            <button class="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }

  // Render by category
  function renderCategory(category = "All", filter = "") {
    let items = [];

    if (category === "Favorites") {
      const allItems = Object.values(menuItems).flat();
      items = allItems.filter((i) => favorites.includes(i.id));
    } else {
      items = menuItems[category] || [];
      if (category === "All") items = [...items];
    }

    if (filter) {
      const q = filter.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q));
    }

    if (!items.length) {
      container.innerHTML = `<p style="text-align:center;opacity:0.7;margin-top:20px;">No items found.</p>`;
      return;
    }

    container.innerHTML = `<div class="menu-grid dynamic">${items
      .map(cardTemplate)
      .join("")}</div>`;

    initCardBehaviors();
  }

  // Tabs
  function setActiveTab(target) {
    tabs.forEach((t) => {
      const active = t.dataset.target === target;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  // Card interactions
  function initCardBehaviors() {
    const cards = container.querySelectorAll(".menu-card");

    cards.forEach((card) => {
      const dec = card.querySelector(".decrease");
      const inc = card.querySelector(".increase");
      const countEl = card.querySelector(".count");
      const addBtn = card.querySelector(".cart-btn");
      const favBtn = card.querySelector(".fav-btn");
      let count = 1;

      const updateCount = (n) => {
        count = Math.max(1, n);
        countEl.textContent = count;
      };

      dec.addEventListener("click", () => updateCount(count - 1));
      inc.addEventListener("click", () => updateCount(count + 1));

      addBtn.addEventListener("click", () => {
        const id = card.dataset.id;
        const item = Object.values(menuItems)
          .flat()
          .find((i) => i.id === id);
        if (!item) return;

        const cart = getCart();
        const found = cart.find((i) => i.id === item.id);
        if (found) found.quantity += count;
        else cart.push({ ...item, quantity: count });
        saveCart(cart);
        updateCartBadge();

        addBtn.textContent = "Added!";
        setTimeout(() => (addBtn.textContent = "Add to Cart"), 900);
      });

      favBtn.addEventListener("click", () => {
        const id = favBtn.dataset.id;
        if (favorites.includes(id)) {
          favorites = favorites.filter((f) => f !== id);
          favBtn.classList.remove("active");
        } else {
          favorites.push(id);
          favBtn.classList.add("active");
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    });
  }

  // Event listeners
  tabs.forEach((btn) =>
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      setActiveTab(target);
      renderCategory(target, searchInput.value);
    })
  );

  searchInput.addEventListener("input", (e) => {
    const category = document.querySelector(".tab-btn.active")?.dataset.target;
    renderCategory(category, e.target.value);
  });

  // Init
  setActiveTab("All");
  renderCategory("All");
  updateCartBadge();
});
