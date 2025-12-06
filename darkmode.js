//super simple dark-mode

// Apply saved mode on every page load
window.addEventListener("load", function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Update button text if button exists on this page
  updateButton();
});

// If the toggle button exists, attach handler
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("dark-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save preference, A10 local storage parameter 
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateButton();
  });
});

function updateButton() {
  const btn = document.getElementById("dark-toggle");
  if (!btn) return;

  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
}
