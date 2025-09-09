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
        id: "yam and egg",
        name: "Yam asn Egg source",
        price: 3500,
        img: "./images/fish-chip.jpg",
        desc: "Loaded with extra cheese, pickles & special sauce.",
      },
      {
        id: "toast",
        name: "Toast Breakfast",
        price: 1500,
        img: "./images/front-close-view-tasty-toast-sandwiches-with-cheese-ham-inside-blue-plate-with-juice-french-friessnack.jpg",
        desc: "Crispy golden toast served with creamy butter and paired with eggs & fresh veggies. A simple yet hearty way to start your day.",
      },
      {
        id: "noodles",
        name: "Stir-Fried Noodles",
        price: 3200,
        img: "./images/lifestyle-food-gourmet-comida-gastronomy.jpg",
        desc: "Savory stir-fried noodles tossed with fresh veggies, aromatic spices, and a touch of soy sauce for that perfect flavor balance.",
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
        desc: "Classic spaghetti served with rich tomato sauce.",
      },
    ],
    Dinner: [
      {
        id: "salad1",
        name: "Fresh Salad",
        price: 2500,
        img: "./images/vitamin-salad-young-vegetables-cabbage-radish-cucumber-fresh-herbs.jpg",
        desc: "A refreshing mix of greens, cucumbers & herbs.",
      },
      {
        id: "salad2",
        name: "Greek Salad",
        price: 2800,
        img: "./images/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg",
        desc: "Olives, feta cheese, and crunchy veggies.",
      },
    ],
    Drinks: [
      {
        id: "drink1",
        name: "Cocktail",
        price: 2000,
        img: "./images/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg",
        desc: "Refreshing fruit cocktail served chilled.",
      },
      {
        id: "drink2",
        name: "Fresh Juice",
        price: 1500,
        img: "./images/whitney-wright-TgQkxQc-t_U-unsplash.jpg",
        desc: "Made with seasonal fruits for a natural taste.",
      },
    ],
  };

  menuItems.All = Object.values(menuItems).flat();

  const { readCart, writeCart, money, updateCartBadge } = window.__cartHelpers;

  const container = document.getElementById("menuContainer");
  const tabs = document.querySelectorAll(".tab-btn");

  function cardTemplate(item) {
    return `
      <div class="menu-card" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span class="price">${money(item.price)}</span>
        <div class="menu-actions">
          <div class="counter">
            <button class="decrease">-</button>
            <span class="count">1</span>
            <button class="increase">+</button>
          </div>
          <button class="cart-btn">Add to Cart</button>
        </div>
      </div>
    `;
  }

  function renderCategory(category = "All") {
    if (!container) return;
    let items = menuItems[category] || [];

    if (category === "All") {
      items = [...items].sort(() => Math.random() - 0.5);
    }

    const list = items.map(cardTemplate).join("");
    container.innerHTML = `<div class="menu-grid dynamic">${list}</div>`;
    initCardBehaviors();
  }

  function setActiveTab(target) {
    tabs.forEach((t) => {
      const active = t.dataset.target === target;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function initCardBehaviors() {
    const cards = container.querySelectorAll(".menu-card");
    cards.forEach((card) => {
      const dec = card.querySelector(".decrease");
      const inc = card.querySelector(".increase");
      const countEl = card.querySelector(".count");
      const addBtn = card.querySelector(".cart-btn");
      let count = 1;

      const updateCount = (n) => {
        count = Math.max(1, n);
        countEl.textContent = count;
      };

      dec.addEventListener("click", () => updateCount(count - 1));
      inc.addEventListener("click", () => updateCount(count + 1));

      addBtn.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const item = Object.values(menuItems)
          .flat()
          .find((i) => i.id === id);
        if (!item) return;

        const cart = readCart();
        const found = cart.find((i) => i.id === item.id);
        if (found) {
          found.quantity += count;
        } else {
          cart.push({ ...item, quantity: count });
        }
        writeCart(cart);
        updateCartBadge();

        addBtn.textContent = "Added!";
        setTimeout(() => (addBtn.textContent = "Add to Cart"), 900);
      });
    });
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      setActiveTab(target);
      renderCategory(target);
    });
  });

  setActiveTab("All");
  renderCategory("All");
  updateCartBadge();
});
