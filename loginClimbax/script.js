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
  message.style.color = "red"; // default color for errors

  // Specific field checks
  if (!email && !password) {
    message.textContent = "Both fields are required";
    return;
  }
  if (!email) {
    message.textContent = "Email is required";
    return;
  }
  if (!password) {
    message.textContent = "Password is required";
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
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    message.textContent = "Invalid email or password";
  }
});
