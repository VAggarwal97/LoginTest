// script.js

// Simulated "database" of credentials
const users = {
  "test@example.com": "Test1234!",
  "user@domain.com": "Password@321"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Basic validation
  if (!email || !password) {
    message.textContent = "Both fields are required";
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email format";
    return;
  }

  // Simulated authentication
  if (users[email] && users[email] === password) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Simulated redirection
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password";
  }
});
