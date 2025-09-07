* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --bg: #0f0f0f;
  --panel: #111;
  --muted: #bbb;
  --text: #f5f5f5;
  --brand: #ff4040;
}
html,
body {
  height: 100%;
}
body {
  font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
}
.logo {
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--brand);
  white-space: nowrap;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 28px;
}
nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s;
}
nav a:hover {
  color: var(--brand);
}
.nav-cta {
  display: flex;
  gap: 14px;
  align-items: center;
}

.order-btn,
.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--brand);
  border: 2px solid var(--brand);
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s;
  white-space: nowrap;
  text-decoration: none;
}
.order-btn:hover,
.hero-btn:hover {
  background: var(--brand);
  color: #fff;
  box-shadow: 0 8px 20px rgba(240, 38, 38, 0.35);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  width: 34px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
}
.hamburger span {
  display: block;
  width: 26px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: 0.25s;
}

#nav-links {
  display: flex;
}
@media (max-width: 900px) {
  #nav-links {
    position: fixed;
    inset: 0 0 0 auto;
    height: 250px;
    width: min(78vw, 320px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    background: #111;
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    transform: translateX(100%);
    transition: transform 0.35s ease;
    z-index: 1001;
    padding: 24px;
  }
  #nav-links a:hover {
    color: var(--brand);
    box-shadow: 0 8px 20px rgba(240, 38, 38, 0.45);
    cursor: pointer;
  }
  #nav-links a {
    font-size: 1.1rem;
  }
  .hamburger {
    display: flex;
  }
  .order-btn {
    display: none;
  }
  .nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
    z-index: 1000;
  }
  body.nav-open #nav-links {
    transform: translateX(0);
  }
  body.nav-open .nav-overlay {
    opacity: 1;
    pointer-events: auto;
  }
  .hamburger.active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
}

.hero {
  padding: 120px 8% 80px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero-title {
  font-size: clamp(2rem, 3.5vw, 3.25rem);
  line-height: 1.1;
  margin-bottom: 16px;
  text-shadow: 0 0 18px rgba(255, 64, 64, 0.45);
}
.hero-subtitle {
  color: var(--muted);
  margin-bottom: 22px;
}
.hero-img img {
  border-radius: 22px;
  box-shadow: 0 0 30px rgba(255, 64, 64, 0.35);
  animation: float 3s ease-in-out infinite;
  object-fit: cover;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  padding: 40px 8% 10px;
}
.feature-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 28px;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
}
.feature-card i {
  font-size: 2rem;
  color: var(--brand);
  margin-bottom: 10px;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(255, 64, 64, 0.25);
}

.menu-preview {
  padding: 64px 8%;
  background: linear-gradient(135deg, #111, #1e1e1e);
}
.section-title {
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  text-align: center;
  margin-bottom: 28px;
  text-shadow: 0 0 15px rgba(240, 38, 38, 0.7);
  animation: fadeDown 0.8s ease both;
}
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
  max-width: 1100px;
  margin: 0 auto;
}
.menu-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px;
  transition: 0.3s;
  cursor: pointer;
}
.menu-item img {
  border-radius: 10px;
  margin-bottom: 12px;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.menu-item h3 {
  color: var(--brand);
  font-size: 1.1rem;
  margin-bottom: 6px;
}
.menu-item:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 26px rgba(240, 38, 38, 0.35);
}
.menu-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}
.view-menu-btn {
  padding: 12px 20px;
  border-radius: 10px;
  border: 0;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s;
}
.view-menu-btn:hover {
  background: #000;
  color: var(--brand);
  box-shadow: 0 8px 20px rgba(240, 38, 38, 0.45);
}

footer {
  background: var(--panel);
  text-align: center;
  padding: 36px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.socials {
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 10px;
}
.socials a {
  color: var(--brand);
  font-size: 1.4rem;
  transition: 0.25s;
}
.socials a:hover {
  color: #fff;
}

#scrollTopBtn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 48px;
  height: 48px;
  display: none;
  place-items: center;
  background: linear-gradient(135deg, #ff4b2b, #ff416c);
  color: #fff;
  border: 0;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s, box-shadow 0.2s;
  z-index: 900;
}
#scrollTopBtn:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 24px rgba(255, 65, 108, 0.45);
}

.menu-page {
  padding: 120px 8% 60px;
}
.menu-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 28px;
  color: var(--brand);
  text-shadow: 0 0 15px rgba(240, 38, 38, 0.6);
}
.menu-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.tab-btn {
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  background: #222;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}
.tab-btn:hover,
.tab-btn.active {
  background: var(--brand);
  color: #fff;
}

.tab-content {
  animation: fadeIn 0.4s ease-in-out;
}
.menu-grid.dynamic {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}
.menu-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  padding: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.menu-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 12px;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.menu-card h3 {
  color: var(--brand);
  font-size: 1.2rem;
  margin-bottom: 6px;
}
.menu-card p {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 10px;
}
.menu-card .price {
  font-weight: 700;
  color: #fff;
}
.menu-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 8px 20px rgba(240, 38, 38, 0.4);
}
.menu-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.counter {
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
}
.counter button {
  background: var(--brand);
  color: #fff;
  border: none;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.25s;
}
.counter button:hover {
  background: #000;
  color: var(--brand);
}
.counter .count {
  padding: 0 12px;
  font-weight: 600;
  color: #fff;
}

.cart-btn {
  background: var(--brand);
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}
.cart-btn:hover {
  background: #000;
  color: var(--brand);
  box-shadow: 0 4px 12px rgba(240, 38, 38, 0.4);
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 350px;
  height: 100%;
  background: #1a1a1a;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.4);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transition: right 0.4s ease;
  padding: 20px;
  color: #fff;
}
.cart-sidebar.active {
  right: 0;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-header h2 {
  font-size: 1.5rem;
  color: #ff4040;
}
#closeCart {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}
.cart-items {
  flex: 1;
  overflow-y: auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cart-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: #161616;
}
.cart-item img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
}
.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cart-item-title {
  font-size: 1rem;
  font-weight: 600;
}
.cart-item-meta {
  font-size: 0.9rem;
  color: #ccc;
}
.cart-item-qty {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cart-item-qty button {
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 6px;
  background: #2a2a2a;
  color: #fff;
  cursor: pointer;
}
.cart-item-remove {
  background: transparent;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 0.9rem;
}

.cart-footer {
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cart-totals {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.cart-summary {
  color: #ccc;
  font-size: 0.9rem;
}
.cart-actions {
  display: flex;
  gap: 10px;
}
.checkout-btn {
  flex: 1;
  padding: 12px;
  border: none;
  background: #ff4040;
  color: #fff;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.checkout-btn:hover {
  background: transparent;
  border: 2px solid #ff4040;
  color: #ff4040;
}
.clear-cart-btn {
  padding: 12px 16px;
  border: 2px solid #333;
  background: #161616;
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
}
.clear-cart-btn:hover {
  border-color: #ff4040;
  color: #ff4040;
}

.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  z-index: 1500;
}
.cart-overlay[hidden] {
  display: none;
}

.cart-toggle {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  margin-left: 4px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
}
.cart-toggle i {
  pointer-events: none;
}
.cart-toggle:hover {
  color: #ff4040;
  transform: scale(1.06);
}
.cart-toggle::after {
  content: attr(data-count);
  position: absolute;
  top: -8px;
  right: -10px;
  background: #ff4040;
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  display: none;
}
.cart-toggle[data-count]:not([data-count="0"])::after {
  display: block;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-img img {
    width: 100%;
    max-height: 450px;
    border-radius: 18px;
    object-fit: cover;
  }
  .hero-title {
    font-size: 2rem;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact {
  position: relative;
  padding: 4rem 2rem;
  color: #fff;
  background: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80")
    no-repeat center center/cover;
  overflow: hidden;
}

.contact .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.5); /* darker overlay */
  backdrop-filter: blur(8px) brightness(0.7); /* sleek glass + dark filter */
  z-index: 1;
}

/* Keep content above overlay */
.contact .container {
  position: relative;
  z-index: 2;
}

.contact .section-title {
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ff4040;
  text-shadow: 0 0 12px #ffcc00, 0 0 30px rgba(248, 210, 16, 0.3);
}

.contact .section-subtitle {
  text-align: center;
  margin-bottom: 3rem;
  color: #bbb;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info p {
  margin: 0.8rem 0;
  color: #ddd;
  font-size: 1rem;
}

.contact-info i {
  margin-right: 8px;
  color: #ff4040;
  text-shadow: 0 0 13px #ffcc00;
}

.contact-form {
  background: rgba(20, 20, 20, 0.85);
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 0 20px rgba(248, 210, 16, 0.15);
  border: 1px solid rgba(248, 210, 16, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(248, 210, 16, 0.25);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: rgba(15, 15, 15, 0.9);
  color: #fff;
  font-size: 1rem;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #777;
}

.contact-form .btn {
  display: inline-block;
  background: linear-gradient(90deg, #ff4040, #ffcc00);
  color: #111;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(248, 210, 16, 0.3);
}

.contact-form .btn:hover {
  background: #111;
  color: #fff;
  box-shadow: 0 0 25px #ff4040;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
