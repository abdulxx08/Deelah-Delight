// auth.js

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // SIGNUP LOGIC
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

      if (!name || !email || !password) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.some((u) => u.email === email)) {
        alert("❌ This email is already registered. Please log in.");
        return;
      }

      const hashed = btoa(password); // Basic password hash

      const newUser = {
        id: "U" + Date.now(),
        name,
        email,
        password: hashed,
        favorites: [],
        orders: [],
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      alert("✅ Account created successfully!");
      window.location.href = "./menu.html";
    });
  }

  // LOGIN LOGIC
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === btoa(password)
      );

      if (!user) {
        alert("❌ Invalid email or password.");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`👋 Welcome back, ${user.name}!`);
      window.location.href = "./menu.html";
    });
  }

  // LOGOUT HANDLER (if button exists)
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      alert("👋 You’ve been logged out.");
      window.location.href = "./login.html";
    });
  }
});
