// // Toggle Light and Dark Mode on the Website
// document.addEventListener("DOMContentLoaded", () => {
//   const themeToggleButton = document.getElementById("theme-toggle");

//   // Function to get the current theme
//   const getCurrentTheme = () =>
//     document.documentElement.getAttribute("data-bs-theme") || "light";

//   // Function to toggle between light and dark themes
//   const toggleTheme = () => {
//     const currentTheme = getCurrentTheme();
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     document.documentElement.setAttribute("data-bs-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   // Set the theme based on the user's preference or the stored theme
//   const storedTheme = localStorage.getItem("theme") || getCurrentTheme();
//   document.documentElement.setAttribute("data-bs-theme", storedTheme);

//   // Add event listener to the button to toggle the theme on click
//   themeToggleButton.addEventListener("click", toggleTheme);
// });
