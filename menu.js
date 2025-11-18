// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = {
    Breakfast: [
      {
        id: "yam1",
        name: "Yam and Egg Sauce",
        price: 100,
        img: "./images/Egg sauce and Yam.jpeg",
        desc: "Fried yam served with spicy tomato egg sauce.",
      },
      {
        id: "akara1",
        name: "Akara & Pap",
        price: 1600,
        img: "./images/a8c57d89-69d6-456f-be40-da482fdb1525.jpeg",
        desc: "Crispy bean cakes with smooth pap and milk.",
      },
      {
        id: "bread1",
        name: "Bread and Akara",
        price: 1100,
        img: "./images/Akara, Bread and Coffee from Lagos ~__.jpeg",
        desc: "Soft agege bread stuffed with hot akara.",
      },
      {
        id: "plantain1",
        name: "Fried Plantain & Egg",
        price: 1500,
        img: "./images/433da33c-2a8f-4c43-a7b2-f30c09e8233f.jpeg",
        desc: "Golden plantain with spicy scrambled eggs.",
      },
      {
        id: "moi1",
        name: "Moi Moi & Custard",
        price: 1900,
        img: "./images/Pap and Moi Moi for breakfast 🥘.jpeg",
        desc: "Steamed bean pudding served with custard.",
      },
      {
        id: "tea1",
        name: "Tea and Bread",
        price: 1500,
        img: "./images/0bcc1e2f-82ef-41d4-a2dd-bc30f479b8f1.jpeg",
        desc: "Hot chocolate tea with buttered bread.",
      },
      {
        id: "rice1",
        name: "Breakfast Jollof Rice",
        price: 3200,
        img: "./images/Jollof rice with avocado and eggs.jpeg",
        desc: "Light jollof rice served with boiled egg and plantain.",
      },
      {
        id: "pancake1",
        name: "Nigerian Pancake",
        price: 2000,
        img: "./images/41d3b285-46c2-47ed-a3ca-c17172e368fc.jpeg",
        desc: "Soft and spicy pancakes made the Nigerian way.",
      },
      {
        id: "indomie1",
        name: "Indomie & Egg",
        price: 2200,
        img: "./images/INDOMIE, FRIED EGG, IRISH POTATO.jpeg",
        desc: "Stir-fried noodles with vegetables and fried egg.",
      },
      {
        id: "beans1",
        name: "Beans & Plantain",
        price: 2800,
        img: "./images/Instagram_ @akitchenfaraway.jpeg",
        desc: "Ewa agoyin beans served with dodo.",
      },
      {
        id: "toast1",
        name: "Toast Sandwich",
        price: 2500,
        img: "./images/Mumbai Street Toastie _ Marion's Kitchen.jpeg",
        desc: "Toasted bread filled with egg, cheese & veggies.",
      },
      {
        id: "omelette1",
        name: "Vegetable Omelette",
        price: 2400,
        img: "./images/Irresistible Delicious Easy Omelettes Recipe….jpeg",
        desc: "Fluffy omelette loaded with peppers and onions.",
      },
      {
        id: "pap1",
        name: "Pap & Moi Moi",
        price: 2700,
        img: "./images/33e90e17-ed29-480c-a5f5-00c778f11f0f.jpeg",
        desc: "Traditional pap served with bean pudding.",
      },
      {
        id: "cereal1",
        name: "Cereal & Milk",
        price: 1500,
        img: "./images/1f58a5c9-e988-49ef-ae0e-5bd71f838a14.jpeg",
        desc: "Chilled cornflakes with milk and banana slices.",
      },
      {
        id: "yam2",
        name: "Boiled Yam & Palm Oil Sauce",
        price: 2500,
        img: "./images/yam and palmoil.JPG",
        desc: "Soft boiled yam served with palm oil pepper sauce.",
      },
      {
        id: "beans2",
        name: "Beans & Bread",
        price: 2300,
        img: "./images/Beans & Bread.jpeg",
        desc: "Hot bread paired with spicy beans sauce.",
      },
      {
        id: "akamu1",
        name: "Akamu & Moi Moi",
        price: 2600,
        img: "./images/akamu-moimoi.jpg",
        desc: "Smooth pap with soft moi moi.",
      },
      {
        id: "corn1",
        name: "Roasted Corn & Pear",
        price: 1200,
        img: "./images/corn-pear.jpg",
        desc: "Charred corn with African pear (ube).",
      },
      {
        id: "egg1",
        name: "Egg Sandwich",
        price: 2100,
        img: "./images/egg-sandwich.jpg",
        desc: "Light sandwich with eggs, lettuce & mayo.",
      },
      {
        id: "moi2",
        name: "Moi Moi & Bread",
        price: 2000,
        img: "./images/moimoi-bread.jpg",
        desc: "Delicious bean pudding served with soft bread.",
      },
      {
        id: "porridge1",
        name: "Plantain Porridge",
        price: 2800,
        img: "./images/plantain-porridge.jpg",
        desc: "Ripe plantains cooked in spicy sauce.",
      },
      {
        id: "soup1",
        name: "Ogi & Akara",
        price: 2000,
        img: "./images/ogi-akara.jpg",
        desc: "Warm pap served with akara for perfect mornings.",
      },
      {
        id: "yam3",
        name: "Fried Yam & Fish",
        price: 3200,
        img: "./images/fried-yam-fish.jpg",
        desc: "Crispy yam served with fried fish and sauce.",
      },
      {
        id: "spag1",
        name: "Spaghetti & Egg",
        price: 3000,
        img: "./images/spaghetti-egg.jpg",
        desc: "Light stir-fried spaghetti with boiled egg.",
      },
      {
        id: "toast2",
        name: "Club Sandwich",
        price: 3500,
        img: "./images/club-sandwich.jpg",
        desc: "Multi-layer sandwich with chicken, lettuce & eggs.",
      },
    ],

    Lunch: [
      {
        id: "rice1",
        name: "Jollof Rice",
        price: 3500,
        img: "./images/jollof-rice.jpg",
        desc: "Classic Nigerian jollof rice with fried chicken.",
      },
      {
        id: "friedrice1",
        name: "Fried Rice & Chicken",
        price: 4000,
        img: "./images/fried-rice.jpg",
        desc: "Fluffy rice stir-fried with veggies and chicken.",
      },
      {
        id: "swallow1",
        name: "Pounded Yam & Egusi",
        price: 4500,
        img: "./images/pounded-yam-egusi.jpg",
        desc: "Soft pounded yam with melon seed soup.",
      },
      {
        id: "eba1",
        name: "Eba & Ogbono",
        price: 4200,
        img: "./images/eba-ogbono.jpg",
        desc: "Garri swallow with rich ogbono soup.",
      },
      {
        id: "rice2",
        name: "White Rice & Stew",
        price: 3800,
        img: "./images/white-rice-stew.jpg",
        desc: "Steamed rice served with beef stew.",
      },
      {
        id: "amala1",
        name: "Amala & Ewedu",
        price: 4000,
        img: "./images/amala-ewedu.jpg",
        desc: "Yam flour swallow with ewedu and gbegiri.",
      },
      {
        id: "semovita1",
        name: "Semovita & Ogbono",
        price: 4300,
        img: "./images/semovita-ogbono.jpg",
        desc: "Smooth semovita served with ogbono soup.",
      },
      {
        id: "okro1",
        name: "Okro Soup & Fufu",
        price: 4200,
        img: "./images/okro-fufu.jpg",
        desc: "Fresh okro soup with fufu and assorted meat.",
      },
      {
        id: "ricebeans1",
        name: "Rice & Beans with Dodo",
        price: 3500,
        img: "./images/rice-beans-dodo.jpg",
        desc: "Savory combo served with pepper stew.",
      },
      {
        id: "afang1",
        name: "Afang Soup & Garri",
        price: 4500,
        img: "./images/afang.jpg",
        desc: "Efik-style soup made with afang leaves and periwinkle.",
      },
      {
        id: "ogbono1",
        name: "Ogbono Soup & Eba",
        price: 4000,
        img: "./images/ogbono.jpg",
        desc: "Rich draw soup served with garri.",
      },
      {
        id: "ofe1",
        name: "Ofe Nsala",
        price: 4800,
        img: "./images/ofe-nsala.jpg",
        desc: "Delicate white soup from Eastern Nigeria.",
      },
      {
        id: "abacha1",
        name: "Abacha (African Salad)",
        price: 3000,
        img: "./images/abacha.jpg",
        desc: "Cassava salad with ugba, fish, and palm oil.",
      },
      {
        id: "porridge2",
        name: "Yam Porridge",
        price: 3500,
        img: "./images/yam-porridge.jpg",
        desc: "Soft yam cooked with palm oil, pepper & vegetables.",
      },
      {
        id: "beans3",
        name: "Ewa Agoyin & Bread",
        price: 2500,
        img: "./images/ewa-agoyin.jpg",
        desc: "Mashed beans with spicy sauce and bread.",
      },
      {
        id: "rice3",
        name: "Jollof Spaghetti",
        price: 3200,
        img: "./images/jollof-spaghetti.jpg",
        desc: "Nigerian-style spaghetti with chicken chunks.",
      },
      {
        id: "ogbono2",
        name: "Starch & Banga Soup",
        price: 4800,
        img: "./images/banga.jpg",
        desc: "Delta delicacy with palm nut soup.",
      },
      {
        id: "tuwo1",
        name: "Tuwo Shinkafa & Miyan Kuka",
        price: 4500,
        img: "./images/tuwo.jpg",
        desc: "Northern rice meal served with dry baobab soup.",
      },
      {
        id: "fishpepper1",
        name: "Fish Pepper Soup",
        price: 3500,
        img: "./images/fish-pepper-soup.jpg",
        desc: "Spicy hot catfish soup with herbs.",
      },
      {
        id: "beans4",
        name: "Beans & Dodo",
        price: 3000,
        img: "./images/beans-dodo.jpg",
        desc: "Soft beans with fried ripe plantain.",
      },
      {
        id: "rice4",
        name: "Coconut Rice",
        price: 4000,
        img: "./images/coconut-rice.jpg",
        desc: "Rice cooked with coconut milk and spices.",
      },
      {
        id: "ofada1",
        name: "Ofada Rice & Sauce",
        price: 4200,
        img: "./images/ofada.jpg",
        desc: "Local rice served with spicy ayamase sauce.",
      },
      {
        id: "soup1",
        name: "Bitterleaf Soup & Fufu",
        price: 4500,
        img: "./images/bitterleaf.jpg",
        desc: "Traditional onugbu soup with assorted meat.",
      },
      {
        id: "ewa1",
        name: "Ewa Riro",
        price: 3500,
        img: "./images/ewa-riro.jpg",
        desc: "Beans stew cooked with palm oil and crayfish.",
      },
      {
        id: "rice5",
        name: "Jollof Rice & Goat Meat",
        price: 4800,
        img: "./images/jollof-goat.jpg",
        desc: "Party-style jollof with tender goat meat.",
      },
    ],

    Dinner: [
      {
        id: "fish1",
        name: "Grilled Tilapia Fish",
        price: 5000,
        img: "./images/grilled-fish.jpg",
        desc: "Spicy grilled fish served with chips and coleslaw.",
      },
      {
        id: "yam4",
        name: "Yam Porridge with Vegetables",
        price: 3800,
        img: "./images/yam-veggies.jpg",
        desc: "Soft yam cooked with palm oil, pepper & greens.",
      },
      {
        id: "rice6",
        name: "Basmati Jollof Rice",
        price: 4200,
        img: "./images/basmati-jollof.jpg",
        desc: "Premium jollof rice made with basmati grains.",
      },
      {
        id: "plantain2",
        name: "Plantain & Fish Sauce",
        price: 3500,
        img: "./images/plantain-fish.jpg",
        desc: "Ripe fried plantain served with spicy fish sauce.",
      },
      {
        id: "snail1",
        name: "Peppered Snail",
        price: 6500,
        img: "./images/peppered-snail.jpg",
        desc: "Delicacy of spicy sautéed snails.",
      },
      {
        id: "rice7",
        name: "Fried Rice & Beef",
        price: 4200,
        img: "./images/friedrice-beef.jpg",
        desc: "Classic fried rice with seasoned beef.",
      },
      {
        id: "catfish1",
        name: "Catfish Pepper Soup",
        price: 4800,
        img: "./images/catfish-peppersoup.jpg",
        desc: "Hot soup with local spices and catfish chunks.",
      },
      {
        id: "egusi1",
        name: "Egusi Soup & Pounded Yam",
        price: 4500,
        img: "./images/egusi.jpg",
        desc: "Rich melon soup served with pounded yam.",
      },
      {
        id: "beans5",
        name: "Beans Porridge",
        price: 3500,
        img: "./images/beans-porridge.jpg",
        desc: "Soft beans stew cooked with palm oil and crayfish.",
      },
      {
        id: "okro2",
        name: "Seafood Okro Soup",
        price: 6000,
        img: "./images/seafood-okro.jpg",
        desc: "Fresh okro with prawns, fish & crab meat.",
      },
      {
        id: "rice8",
        name: "Native Jollof Rice",
        price: 4000,
        img: "./images/native-jollof.jpg",
        desc: "Jollof rice cooked with locust beans and fish.",
      },
      {
        id: "goat1",
        name: "Goat Meat Pepper Soup",
        price: 4800,
        img: "./images/goat-peppersoup.jpg",
        desc: "Hot spicy soup made with tender goat meat.",
      },
      {
        id: "plantain3",
        name: "Plantain Pottage",
        price: 3500,
        img: "./images/plantain-pottage.jpg",
        desc: "Ripe plantains cooked in palm oil sauce.",
      },
      {
        id: "eba2",
        name: "Eba & Vegetable Soup",
        price: 4200,
        img: "./images/eba-vegetable.jpg",
        desc: "Eba swallow with rich efo riro soup.",
      },
      {
        id: "rice9",
        name: "Fried Rice & Gizzard",
        price: 4200,
        img: "./images/friedrice-gizzard.jpg",
        desc: "Spicy fried rice mixed with fried gizzard bites.",
      },
      {
        id: "asaro1",
        name: "Asaro (Yam Porridge)",
        price: 3500,
        img: "./images/asaro.jpg",
        desc: "Yam porridge in palm oil with smoked fish.",
      },
      {
        id: "pasta3",
        name: "Nigerian Style Pasta",
        price: 3200,
        img: "./images/nigerian-pasta.jpg",
        desc: "Pasta cooked in pepper and tomato sauce.",
      },
      {
        id: "fish2",
        name: "Fried Fish & Chips",
        price: 4000,
        img: "./images/fish-chips.jpg",
        desc: "Crispy fried fish with chips and coleslaw.",
      },
      {
        id: "rice10",
        name: "Coconut Jollof Rice",
        price: 4200,
        img: "./images/coconut-jollof.jpg",
        desc: "Jollof cooked with coconut milk and shrimp.",
      },
      {
        id: "soup2",
        name: "Vegetable Soup & Semovita",
        price: 4500,
        img: "./images/vegetable-soup.jpg",
        desc: "Efo riro served with semovita swallow.",
      },
      {
        id: "okro3",
        name: "Ogbono & Okro Mix Soup",
        price: 4700,
        img: "./images/ogbono-okro.jpg",
        desc: "Mixed draw soup with beef and ponmo.",
      },
      {
        id: "suya1",
        name: "Chicken Suya",
        price: 3500,
        img: "./images/chicken-suya.jpg",
        desc: "Grilled chicken suya with onions & pepper mix.",
      },
      {
        id: "porridge3",
        name: "Yam & Vegetable Sauce",
        price: 3700,
        img: "./images/yam-sauce.jpg",
        desc: "Boiled yam served with garden egg sauce.",
      },
      {
        id: "rice11",
        name: "Steamed Rice & Fish",
        price: 4200,
        img: "./images/white-rice-fish.jpg",
        desc: "Plain rice served with spicy fish sauce.",
      },
      {
        id: "meatpie1",
        name: "Meat Pie & Juice Combo",
        price: 2800,
        img: "./images/meatpie-juice.jpg",
        desc: "Crispy meat pie with chilled drink combo.",
      },
    ],

    Drinks: [
      {
        id: "drink1",
        name: "Zobo Drink",
        price: 1000,
        img: "./images/zobo.jpg",
        desc: "Hibiscus drink infused with pineapple and ginger.",
      },
      {
        id: "drink2",
        name: "Chapman",
        price: 1500,
        img: "./images/chapman.jpg",
        desc: "Classic Nigerian cocktail with bitters & soda.",
      },
      {
        id: "drink3",
        name: "Palm Wine",
        price: 2000,
        img: "./images/palmwine.jpg",
        desc: "Freshly tapped local palm wine.",
      },
      {
        id: "drink4",
        name: "Tigernut Milk",
        price: 1800,
        img: "./images/tigernut.jpg",
        desc: "Sweet nut-based drink with dates and coconut.",
      },
      {
        id: "drink5",
        name: "Kunu Aya",
        price: 1500,
        img: "./images/kunu.jpg",
        desc: "Northern Nigerian drink made from tiger nuts.",
      },
      {
        id: "drink6",
        name: "Fura da Nono",
        price: 2000,
        img: "./images/fura.jpg",
        desc: "Traditional Hausa millet & milk drink.",
      },
      {
        id: "drink7",
        name: "Pineapple Juice",
        price: 1500,
        img: "./images/pineapple-juice.jpg",
        desc: "Freshly squeezed pineapple juice.",
      },
      {
        id: "drink8",
        name: "Watermelon Juice",
        price: 1500,
        img: "./images/watermelon-juice.jpg",
        desc: "Hydrating and sweet watermelon juice.",
      },
      {
        id: "drink9",
        name: "Orange Juice",
        price: 1500,
        img: "./images/orange-juice.jpg",
        desc: "100% natural orange juice, no sugar added.",
      },
      {
        id: "drink10",
        name: "Malt Drink",
        price: 1000,
        img: "./images/malt.jpg",
        desc: "Refreshing chilled malt drink.",
      },
      {
        id: "drink11",
        name: "Coconut Water",
        price: 1200,
        img: "./images/coconut-water.jpg",
        desc: "Fresh coconut water served chilled.",
      },
      {
        id: "drink12",
        name: "Lemonade",
        price: 1300,
        img: "./images/lemonade.jpg",
        desc: "Citrus lemonade with mint leaves.",
      },
      {
        id: "drink13",
        name: "Smoothie Mix",
        price: 2500,
        img: "./images/smoothie.jpg",
        desc: "Blend of banana, pineapple, and watermelon.",
      },
      {
        id: "drink14",
        name: "Coke",
        price: 800,
        img: "./images/coke.jpg",
        desc: "Chilled Coca-Cola soft drink.",
      },
      {
        id: "drink15",
        name: "Pepsi",
        price: 800,
        img: "./images/pepsi.jpg",
        desc: "Refreshing Pepsi cola drink.",
      },
      {
        id: "drink16",
        name: "Fanta",
        price: 800,
        img: "./images/fanta.jpg",
        desc: "Tropical orange-flavored soda.",
      },
      {
        id: "drink17",
        name: "Sprite",
        price: 800,
        img: "./images/sprite.jpg",
        desc: "Lemon-lime soda served chilled.",
      },
      {
        id: "drink18",
        name: "Bottled Water",
        price: 500,
        img: "./images/water.jpg",
        desc: "Clean bottled drinking water.",
      },
      {
        id: "drink19",
        name: "Smoov Chapman",
        price: 1000,
        img: "./images/smoov.jpg",
        desc: "Ready-made Chapman drink.",
      },
      {
        id: "drink20",
        name: "Energy Drink",
        price: 2000,
        img: "./images/energy-drink.jpg",
        desc: "Boost your energy instantly.",
      },
      {
        id: "drink21",
        name: "Banana Smoothie",
        price: 2000,
        img: "./images/banana-smoothie.jpg",
        desc: "Thick creamy blend of banana and yogurt.",
      },
      {
        id: "drink22",
        name: "Chocolate Milkshake",
        price: 2500,
        img: "./images/chocolate-milkshake.jpg",
        desc: "Rich creamy chocolate shake.",
      },
      {
        id: "drink23",
        name: "Cold Coffee",
        price: 2200,
        img: "./images/iced-coffee.jpg",
        desc: "Iced coffee topped with cream.",
      },
      {
        id: "drink24",
        name: "Pineapple & Ginger Zobo",
        price: 1800,
        img: "./images/zobo-ginger.jpg",
        desc: "Zobo infused with pineapple & ginger kick.",
      },
      {
        id: "drink25",
        name: "Fruit Punch",
        price: 2000,
        img: "./images/fruit-punch.jpg",
        desc: "Blend of tropical fruit juices.",
      },
    ],
  };

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
