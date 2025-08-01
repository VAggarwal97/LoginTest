// script.js

// Simulated "database" of credentials
const users = {
  "test@example.com": "Test1234!",
  "user2@example.com": "Password456!",
  "user3@example.com": "Password789!",
  "user4@example.com": "Password000!"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Clear previous message color
  message.style.color = "red";

  // Check if either field is empty
  if (!email || !password) {
    message.textContent = "Both fields are required";
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email format";
    return;
  }

  // Authenticate
  if (users[email] && users[email] === password) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Simulated redirect
    }, 1500);
  } else {
    message.textContent = "Invalid email or password";
  }
});
